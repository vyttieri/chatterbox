Rails.application.routes.draw do
  root 'index#index'

  get '/messages', to: 'messages#index'
  # Defines the root path route ("/")
  mount ActionCable.server => '/cable'
end
