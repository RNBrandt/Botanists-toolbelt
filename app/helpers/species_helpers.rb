def get_species(obj_id)
  @child_obj = Species.find(obj_id)
  @description = @child_obj.description
  if @child_obj.image_url
    @image = @child_obj.image_url
    @credit = @child_obj.image_credit
    @col_width = 4
  end

  caps = @description.match(/^[A-Z]+/).to_s

  if caps
    @status = "Status: " + @description[0...(caps.length-1)]
    @description = @description[(caps.length-1)..-1]
  end
end