# This model represents each Glossary Object, which is used for the smart-tip feature
class Glossary
  include Mongoid::Document
  field :word, type: String
  field :definition, type: String
end
