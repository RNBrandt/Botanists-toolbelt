class Option
  include Mongoid::Document
  include Mongoid::Tree
  include Mongoid::Tree::Ordering
  field :text, type: String
  field :head, type: String
  field :page, type: String
  field :key, type: String
end

