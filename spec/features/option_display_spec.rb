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
      expect(page).to have_content("BEGIN")
    end

    describe 'left option display' do
      before(:each) {(page).find('#arrowLeft').click}

      it "renders the option template upon navigation" do
        expect(page.find("#dataCarousel")).to have_content("Bulblets")
      end
      it "does not render incorrect tree navigation" do
        expect(page.find("#dataCarousel")).to_not have_content("cleistogamous")
      end
    end

    describe 'right option display' do
      before(:each) {(page).find('#arrowRight').click}

      it "renders the option template upon navigation" do
        expect(page.find("#dataCarousel")).to have_content("cleistogamous")
      end
      it "does not render incorrect tree navigation" do
        expect(page).to_not have_content("Bulblets")
      end
    end
  end

end


