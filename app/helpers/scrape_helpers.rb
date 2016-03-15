def scrape(url)
  uri = URI(url)
  doc = Nokogiri.parse(Net::HTTP.get(uri))
  blockquote = doc.css('blockquote').inner_text
  dichotomies = blockquote.split("\n")
  dichotomies.delete('')
  dichotomies
end

def create_option(dichotomy, current_href, head, key)
  Option.create(text: add_tool_tip_span(dichotomy), page: current_href, head: head, key: key)
end

def make_first_nodes(dichotomies, parent_page = nil, parent_key = nil, current_href)
  dichotomies.each do |dichotomy|
    if parent_key == nil
      first_options_pair_assignment(dichotomy, current_href)
    else
      top_of_new_pair_assignment(dichotomy, current_href, parent_page, parent_key)
    end
  end
end

def make_family_head_nodes(dichotomy, family_name, current_href)
  papa = Family.find_by(scientific_name: family_name)
  if dichotomy[0] == "1" && dichotomy[1] == '.'
    first_node = Option.create(dichotomy, current_href, scientific_name, "1.")
    papa.children << first_node
  elsif dichotomy[0] == "1" && dichotomy[1] == "'"
    first_node.siblings << create_option(dichotomy, current_href, scientific_name, "1'")
  end
end

def first_options_pair_assignment(dichotomy, current_href)
  if dichotomy[0] == "1" && dichotomy[1] == '.'
    @first = create_option(dichotomy, current_href, 'root', "1.")
  elsif dichotomy[0] == "1" && dichotomy[1] == "'"
    Option.first.siblings << create_option(dichotomy, current_href, 'root', "1'")
  end
end

def top_of_new_pair_assignment(dichotomy, current_href, parent_page, parent_key)
  @parent_option = Option.find_by(page: parent_page, key: parent_key)
  if dichotomy[0] == '1' && dichotomy[1] == '.'
    @parent_option.children << create_option(dichotomy, current_href, current_href, '1.')
  elsif dichotomy[0] == '1' && dichotomy[1] == "'"
    @parent_option.children << create_option(dichotomy, current_href, current_href, "1'")
  end
end

def fill_tree(dichotomies, current_href)
  i = 2
  while dichotomies.find {|dic| dic.match(/^#{Regexp.quote(i.to_s)}'/)} != nil
    prime_match = (/^#{Regexp.quote(i.to_s)}'/)
    non_prime_match = (/^#{Regexp.quote(i.to_s)}\./)
    parent_index = dichotomies.find_index {|dic| dic.match(non_prime_match)} - 1
    @text = dichotomies.find {|dic| dic.match(non_prime_match)}
    parent = Option.find_by(page: current_href, key: dichotomies[parent_index][/^([^\s]+)/])
    parent.children << Option.create(text: add_tool_tip_span(@text),page: current_href, key: "#{i}.")
    text_prime = dichotomies.find {|dic| dic.match(prime_match)}
    parent.children << Option.create(text: text_prime, page: current_href, key: "#{i}'")
    i += 1
  end
end

def associate_links(url, current_href)
  uri = URI(url)
  doc = Nokogiri.parse(Net::HTTP.get(uri))
  links = doc.css('blockquote').css('p')
  lines_with_links = links.select{ |link| link.inner_text.match(/(?<=\.\.\.\.\.).*/) }
  link_objs = []
  lines_with_links.each do |line|
    d_key = line.css('a')[0].inner_text
    hrefs = line.css('a').map { |link| (link.attribute('href').to_s) }
    actual_links = hrefs.select { |href| href.match(/^\/.*/) }
    actual_links.each do |link|
      link_objs << Link.new(link, current_href, d_key)
    end
  end
  return link_objs
end

def big_family_scraper(url, family_name, current_href)
  uri = URI(url)
  doc = Nokogiri.parse(Net::HTTP.get(uri))
  @blockquotes = doc.css('blockquote')
  @nice_blocks = @blockquotes.select { |block| block.inner_text.match(/^1.*/) }
  dichotomies = @nice_blocks[0].inner_text.split("\n")
  # make_family_head_nodes(dichotomies, family_name, current_href)
  # fill_tree(dichotomies, href)
  linked_options = dichotomies.select { |dichotomy| dichotomy.match(/(?<=\.\.\.\.\.).*/) }
  dichotomous_key_group = {}
  linked_options.each do | dic |
    key = dic.match(/^([^\s]+)/)[0]
    group_name = dic.match(/(?<=\.\.\.\.\.).*/)[0]
    dichotomous_key_group[key] = group_name
  end
  p dichotomous_key_group

end

def group_scrape
  i = 1
  while dichotomies.find {|dic| dic.match(/^#{Regexp.quote(i.to_s)}'/)} != nil
    dichotomies = nice_blocks[i].inner_text.split("\n").reject { |text| text==""}


    i += 1
  end
end
#how do we find groups
