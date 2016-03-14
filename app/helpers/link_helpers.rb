# This class is called during the recursive crawl methods
# and is used to maintain data integrity as that method crawls the site.
class Link
  attr_accessor :href, :parent_href, :parent_key
  def initialize(href, parent_href, parent_key)
    @href = href
    @parent_href = parent_href
    @parent_key = parent_key
  end
end
