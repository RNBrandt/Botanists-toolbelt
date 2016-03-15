# This class is called during the recursive crawl methods
# and is used to maintain data integrity as that method crawls the site.
require 'httpclient'
require 'open-uri'

class Link
  attr_accessor :href, :parent_href, :parent_key
  def initialize(href, parent_href, parent_key)
    @href = href
    @parent_href = parent_href
    @parent_key = parent_key
  end
end

def get_redirect(url)
  httpc = HTTPClient.new
  resp = httpc.get(url)
  return resp.header['Location']
end

