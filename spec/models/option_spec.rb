require 'rails_helper'
require 'spec_helper'

RSpec.describe Option, type: :model do
  let(:valid) do
    Option.new(text: 'Will I help you find plants?')
  end

  describe "option validations" do
    it 'saves with valid data' do
      expect{valid.save}.to change{Option.count}.by(1)
    end
    it 'can access children' do
      expect(valid).to respond_to(:children)
    end
  end
end