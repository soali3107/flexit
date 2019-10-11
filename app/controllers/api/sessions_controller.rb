class Api::SessionsController < ApplicationController
    def create
        # debugger
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ['Email and Password incorrect.'], status: 422
        else
            login(@user)
            render 'api/users/show';
        end
    end

    def  destroy
        logout
        render json: { message: 'Logout successful.' }
    end

end
