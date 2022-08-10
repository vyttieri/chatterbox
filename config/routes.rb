Rails.application.routes.draw do
  # Defines the root path route ("/")
  root 'index#index'

  get '/messages', to: 'messages#index'

  mount ActionCable.server => '/cable'
end
