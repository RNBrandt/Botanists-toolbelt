def scrape(url)
  doc = File.open(url) { |f| Nokogiri::XML(f)}
  blockquote = doc.css('blockquote').inner_text
  dichotomies =  blockquote.split("\n")
  dichotomies.delete("")
  return dichotomies
end



def make_first_nodes(dichotomies)
  dichotomies.each do |dichotomy|
    if dichotomy[0] == "1" && dichotomy[1] == '.'
      first = Option.create(text:dichotomy,page: @href, head: @href, key: "1.")
    elsif dichotomy[0] == "1" && dichotomy[1] == "'"
      Option.first.siblings << Option.create(text:add_tool_tip_span(dichotomy),page: @href, head: @href, key: "1'")
    end
 end
end

def fill_tree(dichotomies)
  i = 2
  while dichotomies.find {|dic| dic.match(/^#{Regexp.quote(i.to_s)}'/)} != nil
    prime_match = (/^#{Regexp.quote(i.to_s)}'/)
    non_prime_match = (/^#{Regexp.quote(i.to_s)}\./)
    parent_index = dichotomies.find_index {|dic| dic.match(non_prime_match)} - 1
    @text = dichotomies.find {|dic| dic.match(non_prime_match)}
    parent = Option.find_by(page: @href, key: dichotomies[parent_index][/^([^\s]+)/])
    parent.children << Option.create(text: add_tool_tip_span(@text),page: @href, key: "#{i}.")
    text_prime = dichotomies.find {|dic| dic.match(prime_match)}
    parent.children << Option.create(text: text_prime, page: @href, key: "#{i}'")
    i += 1
  end
end

def nokogiri_glossary
  glossary_uri = URI("http://ucjeps.berkeley.edu/eflora/glossary.html")
  @glossary_doc = Nokogiri.parse(Net::HTTP.get(glossary_uri))
  return @glossary_doc
end

def parse_definitions(glossary_doc)
  @definitions = []
  @glossary_doc.css('dd').each {|x| @definitions << x.inner_text}
  return @definitions
end

def parse_words(glossary_doc)
  @words = []
  @glossary_doc.css('dt').each {|x| @words << x.inner_text.chomp('.')}
  return @words
end

def create_glossary_hash
  @glossary = Hash[@words.zip @definitions]
end

def create_glossary_record
  @glossary.each do |word, definition|
    Glossary.create(word: word, definition: definition)
  end
end

def add_tool_tip_span(text)
  text_array = text.split(" ")
  text_array.each do |word|
    search_word = word.chomp(",").chomp(".")
    if Glossary.where(word: search_word)[0]
      entry = Glossary.find_by(word: search_word)
      text.gsub!(/#{Regexp.quote(word)}/, "<span data-tooltip aria-haspopup='true' class='has-tip [tip-top tip-bottom tip-left tip-right] [radius round]' title=#{entry.definition}>#{word}</span>")
    elsif Glossary.where(word: search_word.chomp("s"))[0]
      entry = Glossary.find_by(word: search_word.chomp("s"))
      text.gsub!(/#{Regexp.quote(word)}/, "<span data-tooltip aria-haspopup='true' class='has-tip [tip-top tip-bottom tip-left tip-right] [radius round]' title=#{entry.definition}>#{word}</span>")
    end
  end

  return text
end

def find_links(url)
  doc = File.open(url) { |f| Nokogiri::XML(f)}
  links = doc.css('blockquote').css('a')
  hrefs = links.map {|link| (link.attribute("href").to_s)}
  useful_hrefs = hrefs.select {|href| href.match(/.*.html/)}
  link_text = links.map {|link| (link.inner_text)}
  useful_link_text = link_text.select { |txt| txt.match(/(?<=\.\.\.\.\.).*/)}
  useful_link_text.map! {|word| word.delete "....."}
  # Hash[@words.zip @definitions]
  link_hash = Hash[useful_link_text.zip useful_hrefs]
  return link_hash
end