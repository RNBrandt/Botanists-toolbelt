class OptionsController < ApplicationController
  def index
    @options = Option.where(head:'root')
  end

  def show
    @option = Option.find(params[:id])
    @children = @option.children
    if request.xhr?
      render partial: "layouts/carousel", locals: {options: @children}, layout: false
    end

  end
end
