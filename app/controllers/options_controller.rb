# Controller for all Options objects
class OptionsController < ApplicationController

  def index
    @options = Option.where(head:'root')
  end

  def twitter
    client = Twitter::REST::Client.new do |config|
      # took out all this for deployment
      # Dave
    end

    @tweets = client.search("angiosperm", result_type: "recent").take(10)
    if request.xhr?
      render partial: "layouts/info_twitter", locals: {tweets: @tweets}, layout: false
    end

  end

  def show
    @option = Option.find(params[:id])
    @children = @option.children
    if request.xhr?
      render partial: 'layouts/carousel', locals: { options: @children }, layout: false
    end
  end
end
