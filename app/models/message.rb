class Message < ApplicationRecord
  after_create_commit { ActionCable.server.broadcast('chat', { message: self }) }
end
