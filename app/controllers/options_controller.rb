class OptionsController < ApplicationController
  def index
    @options = Option.where(head:'root')
  end

  def show
    @option = Option.find(params[:id])
    @children = @option.children
  end
end
