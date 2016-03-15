
def get_doc(href)
  url = BASE_URL + href
  uri = URI(url)
  doc = Nokogiri.parse(Net::HTTP.get(uri))
end

def get_blockquote(href)
 doc = get_doc(href)
 blockquote = doc.css("blockquote")
end


def create_option(dichotomy, current_href, head, key)
  Option.create(text: add_tool_tip_span(dichotomy), page: current_href, head: head, key: key, child_obj:{})
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

def get_family_links
  href = "/eflora/key_list.html"
  doc = get_doc(href)
  #blockquote = doc.css("blockquote")
  table_data = doc.css("ol")
  family_names = table_data.inner_text.split("\n").map! {|name| name.strip}
  family_names.shift
  links = doc.css("ol").css("a").map { |link| (link.attribute('href').to_s) }
  family_link_hash = Hash[family_names.zip(links)]
  to_delete = ["Asteraceae", "Fabaceae", "Poaceae", "Brassicaceae"]
  family_link_hash.delete_if { |key, value| to_delete.include?(key)}
  p family_link_hash
end




def recursive_scrape(parser)
  parser.scrape_text
  if parser.find_dichotomies_with_links == []
    new_url = get_redirect(BASE_URL + parser.href)
    parent_option = Option.find_by(page:parser.parent_page, key: parser.parent_key)
    child = assign_obj_type(new_url[0])
    parent_option.child_obgitj[child.class.to_s] = child.id
  end
  parser.make_first_node
  parser.fill_tree
  links = parser.create_link_obj
  links.each do |link|
    blockquote = get_blockquote(link.href)
    new_parser = BlockQuoteParser.new(blockquote, link.href, {parent_page: link.parent_href, parent_key: link.parent_key})
    recursive_scrape(new_parser)
  end
end

def scrape_from_families
  p "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
  p "FAIMILIES"
  link_hash = get_family_links

  link_hash.each do |family_name, href|
     p family_name
     blockquote = get_blockquote(href)
     parser = FamilyParser.new(blockquote, href, options= { "family_name" => family_name })
     recursive_scrape(parser)
  end
end

def step_through_genus

end












