class Family
  include Mongoid::Document
  include Mongoid::Tree
  field :scientific_name, type: String
  field :common_name, type: String
  field :description, type: String
  # belongs_to :option
end
