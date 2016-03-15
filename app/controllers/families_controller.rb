class FamiliesController < ApplicationController

  def index
    @families = Family.all
  end

  def show
    @family = Family.find(params[:id])
  end
end