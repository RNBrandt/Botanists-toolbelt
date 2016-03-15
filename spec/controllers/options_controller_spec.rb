require 'rails_helper'
require 'spec_helper'

describe OptionsController, type: :controller do
  # before(:each) { Option.destroy_all }
  # let!(:option) { Option.create(text: 'Is it a plant?', head: 'root') }
  # let!(:child) { option.children.create(text: 'Bulblets') }
  # let!(:child_prime) { option.children.create(text: "That's right, Bulblets") }
  let!(:option) { Option.first }
  let!(:options) { Option.where(head: 'root') }

  describe 'get #index' do
    it 'renders question display' do
      get :index
      expect(response).to render_template :index
    end

    it 'displays option objects' do
      get :index
      expect(assigns(:options)).to eq(options)
    end
  end

  describe 'show' do
    it "assigns the requested option as @option" do
      get :show, id: option.to_param
      expect(assigns(:option)).to eq(option)
    end

    it 'assigns the children of option as @children' do
      get :show, {:id => option.to_param}
      expect(assigns(:children)).to eq(option.children)
    end
  end
end
