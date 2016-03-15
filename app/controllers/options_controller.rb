# Controller for all Options objects
class OptionsController < ApplicationController

  def index
    @options = Option.where(head:'root')
    if request.xhr?
      render partial: 'layouts/carousel', locals: { options: @options }, layout: false
    end

  end

  def twitter
    client = Twitter::REST::Client.new do |config|

      config.consumer_key        = Rails.application.secrets[:'config.consumer_key']
      config.consumer_secret     = Rails.application.secrets[:'config.consumer_secret']
      config.bearer_token        = Rails.application.secrets[:'config.bearer_token']
    end
    puts "=" * 40
    puts params[:keyword]
    puts "=" * 40

    @tweets = client.search(params[:keyword], result_type: "recent").take(20)

    if request.xhr?
      render partial: 'layouts/info_twitter', locals: {tweets: @tweets}, layout: false
    end

  end

  def show
    @option = Option.find(params[:id])
    @children = @option.children
    @parent = @option.parent
    if request.xhr?
      render partial: 'layouts/carousel', locals: { options: @children }, layout: false
    end
  end
end
