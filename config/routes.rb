Rails.application.routes.draw do
  # Defines the root path route ("/")
  root 'chat#show'

  mount ActionCable.server => '/cable'
end
