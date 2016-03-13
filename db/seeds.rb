require_relative "../app/helpers/scrape_helpers"
require_relative "../app/helpers/link_helpers"

Option.destroy_all
Glossary.destroy_all

BASE_URL = '/Users/apprentice/Desktop/pete/Jepson-2/ucjeps.berkeley.edu'

@current_href = "/IJM_fam_key.html"

#@parent_url = nil



def scrape_and_find_links(url)
  dichotomies = scrape(url)
  make_first_nodes(dichotomies)
  fill_tree(dichotomies)
  return find_links(url)
end

def create_link_objs (url)
  link_hash = make_link_hash(url)
  link_objs = []
  link_hash.each do |key,href|
    link_objs << Link.new(href, @current_href, key)
  end
  return link_objs
end

def recursive_scrape(href, parent_href)
  p_tags = scrape(url)
  if tags_with_links = p_tags.select { |txt| txt.match(/(?<=\.\.\.\.\.).*/)} == []
    return "done"
  end
  #if page has no links with .....
  #return

  url = BASE_URL + href
  scrape_and_find_links(url)
  links = create_link_objs(url)

  links.each do |key, link|
    recursive_scrape(link, href)
  end

end

 url = BASE_URL + @current_href
p create_link_objs(url)

