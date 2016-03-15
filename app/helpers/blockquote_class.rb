# This class will house all the methods required to parse a a key into matched and linked dichotomies
class BlockQuoteParser
  attr_reader :dichotomies, :dichotomies_with_links, :link_objs, :href, :parent_page, :parent_key
  def initialize (nokogiri_object, href, options={})
    @blockquote = nokogiri_object
    @parent_page = options[:parent_page]
    @parent_key = options[:parent_key]
    @all_text_after_dots = /(?<=\.\.\.\.\.).*/
    @href = href
  end

  def sanitize_blockquote
    @blockquote.search('font').remove
  end

  def scrape_text
    sanitize_blockquote
    dic_line = @blockquote.css('p')
    nice_lines =  dic_line.select { |dic| !dic.inner_text.match(/^.{1,3}a([^\s]+)/) }
    @dichotomies = nice_lines.map { |line| line.inner_text}
    @dichotomies.map! { |dic| dic.gsub(/[\u0080-\u00ff]/, "") }
    @dichotomies.map! { |dic| dic.gsub(/\n/, "")}
    @dichotomies.delete("")
    @dichotomies
  end

#This is a replacement of line 34 of the seeds file, I haven't included the ==[] case required of that if statement
  def find_dichotomies_with_links
    dichotomies_with_links = @dichotomies.select{ |txt| txt.match(@all_text_after_dots)}
  end
# assigns the top dichotomy of each key... essentially it grabs the 1 and 1'
# I need to ask Pete about this one... where does the current href, parent page and parent key come from
  def make_first_node
    @dichotomies.each do |dichotomy|
      if !@parent_key
        first_option_pair(dichotomy)
      else
        top_pair_node(dichotomy)
      end
    end
  end

#Creates the very first option. This is required to ensure the root is properly set
  def first_option_pair(dichotomy)
    if dichotomy[0] == "1" && dichotomy[1] == '.'
      @first = create_option(dichotomy, 'root', "1.")
    elsif dichotomy[0] == "1" && dichotomy[1] == "'"
      Option.first.siblings << create_option(dichotomy, 'root', "1'")
    end
  end

#creates an option object
  def create_option(dichotomy, head = nil, key)
    Option.create(text: add_tool_tip_span(dichotomy), page: @href, head: head, key: key, child_obj:{})
  end

#this method is used as part of the make first node method
#immediately after clicking an href to a new page, to assign children
  def top_pair_node(dichotomy)
    @parent_option = Option.find_by(page: @parent_page, key: @parent_key)
    if dichotomy[0] == '1' && dichotomy[1] =='.'
      @parent_option.children << create_option(dichotomy, @href, '1.')
    elsif dichotomy[0] == '1' && dichotomy[1] == "'"
      @parent_option.children << create_option(dichotomy, @href, "1'")
    end
  end

  def fill_tree
    i = 2
    while @dichotomies.find {|dic| dic.match(/^#{ Regexp.quote(i.to_s) }'/)} != nil
      prime_match = (/^#{ Regexp.quote(i.to_s) }'/)
      non_prime_match = (/^#{ Regexp.quote(i.to_s) }\./)
      parent_index = @dichotomies.find_index {|dic| dic.match(non_prime_match)} - 1
      p parent_index
      text = @dichotomies.find {|dic| dic.match(non_prime_match)}
      p "---------------------------------------"
      p i
      p @dichotomies[parent_index]
      p "---------------------------------------"
      parent = Option.find_by(page: @href, key: @dichotomies[parent_index][/^([^\s]+)/])
      child = create_option(text, "#{i}.")
      parent.children << child
      text_prime = @dichotomies.find {|dic| dic.match(prime_match)}
      child_prime = create_option(text_prime, "#{i}'")
      parent.children << child_prime

      i += 1

    end
  end


  def create_link_obj

    links = @blockquote.css('p')
    lines_with_links = links.select{ |link| link.inner_text.match@all_text_after_dots }
    @link_objs = []
    lines_with_links.each do |line|
      d_key = line.css('a')[0].inner_text
      hrefs = line.css('a').map { |link| (link.attribute('href').to_s) }
      actual_links = hrefs.select { |href| href.match(/^\/.*/) }
      actual_links.each do |link|
        @link_objs << Link.new(link, @href, d_key)
      end
    end
    return @link_objs
  end

end

class FamilyParser < BlockQuoteParser
  attr_reader :key_to_groups
  def initialize(blockquote, href, options={})
    super
    @family_name = options['family_name']
  end

  def top_pair_node(dichotomy)

    @family_id = Family.find_by(scientific_name: @family_name).id
    @parent_option = Option.find_by( child_obj['Family'] = "@family_id" )
    if dichotomy[0] == '1' && dichotomy[1] =='.'
      @parent_option.children << create_option(dichotomy, @href, '1.')
    elsif dichotomy[0] == '1' && dichotomy[1] == "'"
      @parent_option.children << create_option(dichotomy, @href, "1'")
    end

  end

  def group_key_hash
    lines_with_groups = @dichotomies.select { |dichotomy| dichotomy.match(/.*\.\.\.\.\.Group/) }
    @key_to_groups = {}
    lines_with_groups.each do |line|
      d_key = line.match(/^([^\s]+)/)[0]
      group_number = line.match(/.$/)[0]
      key_to_groups[d_key] = group_number
    end

    return @key_to_groups
  end

  def create_links
    links = @blockquote.css('p')
    lines_with_links = links.select{ |link| link.inner_text.match@all_text_after_dots }
    @link_objs = []
    lines_with_links.each do |line|
      # p line if line.css('a').length < 2
      d_key = line.css('a')[0].inner_text
      hrefs = line.css('a').map { |link| (link.attribute('href').to_s) }
      actual_links = hrefs.select { |href| href.match(/^#.*/) }
      actual_links.each do |link|
        @link_objs << Link.new(link, @href, d_key)
      end
    end
    return @link_objs
  end

  def embedded_group_links
    embedded_links = []
    @key_to_groups.each do |key, group_number|
      embedded_links << Link.new("#{href}_#{group_number}", href, key )
    end
    return embedded_links
  end


end


