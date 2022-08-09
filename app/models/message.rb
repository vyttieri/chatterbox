class Message < ApplicationRecord
  after_create_commit { ActionCable.server.broadcast('chat', { message: self.body }) }
end
