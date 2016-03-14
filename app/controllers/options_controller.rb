# Controller for all Options objects
class OptionsController < ApplicationController
  
  def index
    @options = Option.where(head:'root')    
  end

  def twitter
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "8lHyMCVfUuK3AnKum3Lnif7v1"
      config.consumer_secret     = "bUKxxbInE78ZGBGDqHnkbmNFeRRkDtJJ81BHp867JkHa2KMgpO"
      config.bearer_token        = "AAAAAAAAAAAAAAAAAAAAAAFxuAAAAAAAo6clRSVZeHXG6drf12a4WoOq1mo%3DqohJmKVTXVQ86rio1v2zScWaq4lbDWaIlcpx8CLNjN4qUc4cBV"
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
