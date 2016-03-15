def nokogiri_glossary
  glossary_uri = URI('http://ucjeps.berkeley.edu/eflora/glossary.html')
  @glossary_doc = Nokogiri.parse(Net::HTTP.get(glossary_uri))
  @glossary_doc
end

def parse_definitions
  @definitions = []
  @glossary_doc.css('dd').each { |x| @definitions << x.inner_text }
  @definitions
end

def parse_words
  @words = []
  @glossary_doc.css('dt').each { |x| @words << x.inner_text.chomp('.') }
  @words
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
  text_array = text.split(' ')
  text_array.each do |word|
    search_word = word.chomp(',').chomp('.')
    if Glossary.where(word: search_word)[0]
      entry = Glossary.find_by(word: search_word)
      text.gsub!(/#{Regexp.quote(word)}/, "<span data-tooltip aria-haspopup='true' class='has-tip [tip-top tip-bottom tip-left tip-right] [radius round]' title=#{ entry.definition }>#{ word }</span>")
    elsif Glossary.where(word: search_word.chomp('s'))[0]
      entry = Glossary.find_by(word: search_word.chomp('s'))
      text.gsub!(/#{Regexp.quote(word)}/, "<span data-tooltip aria-haspopup='true' class='has-tip [tip-top tip-bottom tip-left tip-right] [radius round]' title=#{e ntry.definition }>#{ word }</span>")
    end
  end

  return text
end

def create_glossary
  nokogiri_glossary
  parse_definitions
  parse_words
  create_glossary_hash
  create_glossary_record
end
