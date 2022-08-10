import consumer from "channels/consumer"

export default function createChatChannel(addMessage) {
  return consumer.subscriptions.create('ChatChannel', {
    connected() {
      // Called when the subscription is ready for use on the server
      console.log('connected to ChatChannel')
    },

    disconnected() {
      // Called when the subscription has been terminated by the server
    },

    received(data) {
      // Called when there's incoming data on the websocket for this channel
      addMessage(data.message)
    },

    disconnect() {
      consumer.disconnect()
    },
  })
}
