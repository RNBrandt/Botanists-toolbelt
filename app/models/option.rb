# This class represents each option in the dichotemous key.
#It represents the majority of the data
class Option
  include Mongoid::Document
  include Mongoid::Tree
  include Mongoid::Tree::Ordering
  field :text, type: String
  field :head, type: String
  field :page, type: String
  field :key, type: String
end

