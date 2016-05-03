require 'rails_helper'
require 'spec_helper'

describe Option, :js => true do
  let(:term) do
    Glossary.new(word: 'cleistogamous', definition: 'Bud-like, unopening flowers that are generally self-fertilized.')
  end

  before(:each) {
    Capybara.current_window.resize_to(1400,900)
    visit root_path
  }

  context 'feature tabs' do

    # describe 'glossary' do
    #   it "displays glossary entries by alphabetic index" do
    #     page.find('#tab-2').click_on('C')
    #     expect(page.find('#tab-2')).to have_content('Bud-like')
    #   end

    # end

  end
end