class GeneraController < ApplicationController

  def index
    @genera = Genus.all
  end

  def show
    @genus = Genus.find(params[:id])
    render layout: "detail"
  end
end