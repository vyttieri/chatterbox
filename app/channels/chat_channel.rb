class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chat'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    Message.create!(body: data['message'])
  end
end
