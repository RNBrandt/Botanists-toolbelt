require 'rails_helper'
require 'spec_helper'

describe Option, :js => true do

  # before(:all) { Option.destroy_all }

  # let!(:option) { Option.create(text: "Is it a plant?", head: "root") }
  # let!(:option_prime) { Option.create(text: "Is it a dog?", head: "root") }
  # let!(:child) { option.children.create(text: "Bulblets") }
  # let!(:child_prime) { option.children.create(text: "That's right, Bulblets") }
  # let!(:dog) { option_prime.children.create(text: "Maybe it's a dogplant?") }
  # let!(:dog_prime) { option_prime.children.create(text: "It's almost certainly a dogplant.") }

  before(:each) {
    Capybara.current_window.resize_to(1400,900)
    visit root_path
  }

  context 'index page' do
    it 'displays page title' do
      expect(page).to have_content("welcome to Botanist Toolbelt")
    end

    describe 'option display' do
      it "renders the option template on left navigation" do
        click_on('◀ Continue Here')
        expect(page.find("#dataCarousel")).to have_content("Bulblets")
      end

      it "renders the option template on right navigation" do
        click_on('Continue Here ▶')
        expect(page.find("#dataCarousel")).to have_content("Specimens")
      end
    end

    describe 'info tab' do
      before(:each) do
        click_on('Angiosperm')
      end

      it "loads info from Wikipedia API" do
        click_on('Angiosperm')
        expect(page.find('#wikipediaDiv')).to have_content("angiosperm")
      end

      it "can be closed" do
        click_on('close')
        expect(page).to_not have_content('angiosperm')
      end
    end

    describe 'photo gallery' do
      it "displays images from Flickr API" do
        click_on('Angiosperm')
        click_on('Flickr Photos')
        expect(page.find('#flickrDiv')).to have_selector('img')
      end
    end

    describe 'smart search' do
      before(:each) do
        fill_in 'autocomplete-ajax', with: 'ly'
      end

      it 'displays dropdown of auto-complete options' do
        expect(page).to have_content('Lycopodiaceae')
      end

      # it 'allows user to navigate to associated page' do
      #   click_on('Search')
      #   expect(page).to have_content('....')
      # end
    end
  end

end