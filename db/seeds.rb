Option.destroy_all
Glossary.destroy_all

@curent_page = 'index'
# key_site variable should be dynamically created and sent in
key_site = '/Users/apprentice/Desktop/pete/Jepson-2/ucjeps.berkeley.edu/IJM_fam_key.html'
def scrape(key_site)
  doc = File.open(key_site) { |f| Nokogiri::XML(f)}
  blockquote = doc.css('blockquote').inner_text
  dichotomies =  blockquote.split("\n")
  dichotomies.delete("")
  return dichotomies
end

def make_first_nodes(dichotomies)
  dichotomies.each do |dichotomy|
    if dichotomy[0] == "1" && dichotomy[1] == '.'
      first = Option.create(text:dichotomy,page: @current_page, head: "root", key: "1.")
    elsif dichotomy[0] == "1" && dichotomy[1] == "'"
      Option.first.siblings << Option.create(text:add_tool_tip_span(dichotomy),page: @current_page, head: "root", key: "1'")
    end
  end
end

def fill_tree(dichotomies)
  i = 2
  while dichotomies.find {|dic| dic.match(/^#{Regexp.quote(i.to_s)}'/)} != nil
    prime_match = (/^#{Regexp.quote(i.to_s)}'/)
    non_prime_match = (/^#{Regexp.quote(i.to_s)}\./)
    parent_index = dichotomies.find_index {|dic| dic.match(non_prime_match)} - 1 # finds the index the current option, and subtracts one to find it's parent, this is an inherent pattern to dichotomous keys.
    @text = dichotomies.find {|dic| dic.match(non_prime_match)} #adds the text of the option to the variable.
    parent = Option.find_by(page: @curent_index, key: dichotomies[parent_index][/^([^\s]+)/]) #finds the parent object using the parent_index variable assigned earlier.
    parent.children << Option.create(text: add_tool_tip_span(@text),page: @current_page, key: "#{i}.") #creates a new instance of an option and adding it as a child of the parent
    text_prime = dichotomies.find {|dic| dic.match(prime_match)} # finds the prime version, of the recently created Option instance.
    parent.children << Option.create(text: text_prime, page: @current_page, key: "#{i}'") # Adds previous line as a child of the parent.
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
    elsif Glossary.where(wrod: search_word.chomp("s"))[0]
      entry = Glossary.find_by(word: search_word.chomp("s"))
      text.gsub!(/#{Regexp.quote(word)}/, "<span data-tooltip aria-haspopup='true' class='has-tip [tip-top tip-bottom tip-left tip-right] [radius round]' title=#{entry.definition}>#{word}</span>")
    end
  end
  p text
  return text
end

#3. Sporangia, sporangium cases, seeds, cones, or cone-like structures 0 or not readily apparent [plants in strictly vegetative condition]
#3.  Sporangia, sporangium cases, seeds, cones, or cone-like structures 0 or not readily apparent [plants in strictly vegetative condition]
nokogiri_glossary
parse_definitions(@glossary_doc)
parse_words(@glossary_doc)
create_glossary_hash
create_glossary_record
dichotomies = scrape(key_site)
make_first_nodes(dichotomies)
fill_tree(dichotomies)



