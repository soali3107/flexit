Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # resources :users, only: :show
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create, :index]
    # posts index/create
    resource :session, only: [:new, :create, :destroy]
    resources :videos, only: [:show, :index]
  end
  root to: "static_pages#root"
end
