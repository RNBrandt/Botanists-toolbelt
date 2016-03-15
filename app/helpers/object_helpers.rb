def assign_obj_type(url)
  uri = URI(url)
  doc = Nokogiri.parse(Net::HTTP.get(uri))
  main_heading = doc.css("span.pageLargeHeading").inner_text
  sub_heading = doc.css("span.pageMajorHeading").inner_text
  if main_heading.split(" ").length >= 2
    return create_obj(url, Species)
  elsif sub_heading.match(/.+FAMILY/)
    return create_obj(url, Family)
  else
    return create_obj(url, Genus)
  end

end


def create_obj(url, klass)
  p '******************url**********************'
  p url
  uri = URI(url)
  doc = Nokogiri.parse(Net::HTTP.get(uri))
  scientific_name = doc.css("span.pageLargeHeading").inner_text
  common_name = doc.css("span.pageMajorHeading").inner_text
  if doc.css("div.bodyText").inner_text == ''
    p "BROKEN!!!!!!!!!!!!"
    return Family.create(description: "Sorry this link is broken")
  else
    description = doc.css("div.bodyText").inner_text.match(/.+?(?=eFlora)/)[0]
  end

  if klass.where(scientific_name: scientific_name) == []

    return klass.create(scientific_name: scientific_name, common_name: common_name, description: add_tool_tip_span(description))
  else
    return klass.find_by(scientific_name: scientific_name)
  end
end



# p assign_obj_type('http://ucjeps.berkeley.edu/eflora/eflora_display.php?tid=12633')

# p assign_obj_type("http://ucjeps.berkeley.edu/eflora/eflora_display.php?tid=34")

# # p assign_obj_type("http://ucjeps.berkeley.edu/eflora/eflora_display.php?tid=10193")
