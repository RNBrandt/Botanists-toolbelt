require_relative "../app/helpers/scrape_helpers"
require_relative "../app/helpers/link_helpers"
require_relative "../app/helpers/object_helpers"
require_relative "../app/helpers/glossary_helpers"
require_relative "../app/helpers/blockquote_class"
# Option.destroy_all
# Glossary.destroy_all
# Species.destroy_all
# Family.destroy_all
# Genus.destroy_all

BASE_URL = "http://ucjeps.berkeley.edu"

@root_href = "/IJM_fam_key.html"

def scrape_and_make_options(current_href, parent_page=nil, parent_key=nil)
  url = BASE_URL + current_href
  dichotomies = scrape(url)
  make_first_nodes(dichotomies, parent_page, parent_key, current_href )
  fill_tree(dichotomies, current_href)
end

def create_link_objs (url, current_href)
  link_hash = make_link_hash(url)
  link_objs = []
  link_hash.each do |key,href|
    link_objs << Link.new(href, current_href, key)
  end
  return link_objs
end


  # first_blockquote = get_blockquote("/IJM_fam_key.html")
  # parser = BlockQuoteParser.new(first_blockquote, "/IJM_fam_key.html")

# recursive_scrape(parser)
# scrape_from_families
# recursive_scrape(parser)


def big_family_scraper(href)
  p "Doing shhhhtuff"
  blockquotes = get_blockquote(href)
  blockquotes = blockquotes.select { |block| block.inner_text.match(/^1/)}
  p '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'
  first_parser = FamilyParser.new(blockquotes.shift, href, {"family_name"=> "Poaceae"})
  first_parser
  first_parser.scrape_text
  first_parser.dichotomies
  key_to_groups = first_parser.group_key_hash
  recursive_scrape(first_parser)
  p embedded_links = first_parser.embedded_group_links
  embedded_link_hash = Hash[embedded_links.zip(blockquotes)]
  embedded_link_hash.each do |link, blockquote|
    new_parser = BlockQuoteParser.new(blockquote, link.href, { parent_page: link.parent_href, parent_key: link.parent_key })
    recursive_scrape(new_parser)
  end
end

big_family_scraper("/cgi-bin/get_IJM.pl?key=58")




