require_relative "../app/helpers/scrape_helpers"
require_relative "../app/helpers/link_helpers"
require_relative "../app/helpers/object_helpers"
require_relative "../app/helpers/glossary_helpers"
Option.destroy_all
Glossary.destroy_all
Species.destroy_all
Family.destroy_all
Genus.destroy_all

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

def recursive_scrape(current_href, parent_page=nil,parent_key=nil)
  url = BASE_URL + current_href
  p_tags = scrape(url)
  if tags_with_links = p_tags.select { |txt| txt.match(/(?<=\.\.\.\.\.).*/)} == []
    new_url = get_redirect(url)
    newOption = Option.find_by(page:parent_page, key:parent_key)
    newOption.children << assign_obj_type(new_url[0])
    newOption.save
    return
  end

  scrape_and_make_options(current_href, parent_page, parent_key)
  links = associate_links(url, current_href)

  links.each do |link|
    recursive_scrape(link.href, link.parent_href, link.parent_key)
  end
end

recursive_scrape("/IJM_fam_key.html")
# big_family_scraper('http://ucjeps.berkeley.edu/cgi-bin/get_IJM.pl?key=58', 'Asteraceae', 'fuck knows')


# create_glossary

