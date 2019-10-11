class Api::VideosController < ApplicationController
    def index
        @videos = Video.all
        # debugger
        render :index
    end

    def show
        @videos =  Video.find(params[:id])
    end

    private
    def id_params
        params.require(:video).permit(:id)
    end
end