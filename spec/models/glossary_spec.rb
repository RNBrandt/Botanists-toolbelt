require 'rails_helper'
require 'spec_helper'

RSpec.describe Glossary, type: :model do
  let(:term) do
    Glossary.new(word: 'leaf', definition: 'Viking conquerer and explorer')
  end

  describe "glossary validations" do
    it 'saves with valid data' do
      expect{term.save}.to change{Glossary.count}.by(1)
    end
  end
end