import consumer from "channels/consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('connected to ChatChannel')

    document.getElementById('chatbox').addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        this.chat(e.target.value)
        e.target.value = ''

        e.preventDefault()
      }
    })
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log('received some data', data)
    // Called when there's incoming data on the websocket for this channel
  },

  chat: function(message) {
    this.perform('chat', { message: message })
  }
})
