require 'nokogiri'

class Glossary
  include Mongoid::Document
  field :word, type: String
  field :definition, type: String
end

