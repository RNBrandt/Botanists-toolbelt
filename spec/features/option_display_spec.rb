require 'rails_helper'
require 'spec_helper'

describe Option, :js => true do

  before(:all) { Option.destroy_all }

  let!(:option) { Option.create(text: "Is it a plant?", head: "root") }
  let!(:option_prime) { Option.create(text: "Is it a dog?", head: "root") }
  let!(:child) { option.children.create(text: "Bulblets") }
  let!(:child_prime) { option.children.create(text: "That's right, Bulblets") }
  let!(:dog) { option_prime.children.create(text: "Maybe it's a dogplant?") }
  let!(:dog_prime) { option_prime.children.create(text: "It's almost certainly a dogplant.") }

  before(:each) {
    Capybara.current_window.resize_to(1400,900)
    visit root_path
  }

  context 'index page' do
    it 'displays page title' do
      p "SPEC " + ("$" * 80)
      p option
      p option.children
      expect(page).to have_content("welcome to Botanist Toolbelt")
    end

    describe 'option display' do
      it "renders the option template on left navigation" do
        click_on('◀ Continue Here')
        expect(page.find("#dataCarousel")).to have_content("Bulblets")
      end

      it "renders the option template on right navigation" do
        click_on('Continue Here ▶')
        expect(page.find("#dataCarousel")).to have_content("dogplant")
      end
    end

    describe 'info tab' do
      it "loads info from Wikipedia API" do
        expect(page.find('#tabDetail')).to have_content("Latin")
      end
    end

    describe 'photo gallery' do
      it "displays images from Flickr API" do
        expect(page.find('#flickr_photos')).to have_selector('img')
      end
    end
  end

end