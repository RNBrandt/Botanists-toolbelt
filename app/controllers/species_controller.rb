class SpeciesController < ApplicationController

  def index
    @species = Species.all
  end

  def show
    @species = Species.find(params[:id])
  end
end