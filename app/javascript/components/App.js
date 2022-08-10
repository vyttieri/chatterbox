import React from 'react'

import createChatChannel from 'channels/chat_channel'
import h from 'helpers/createElement'
import Chatbox from 'components/Chatbox'
import Message from 'components/Message'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.chatChannel = createChatChannel(this.addMessage)
		this.state = { messages: [] }
	}

	addMessage = (message) => {
		this.setState(state => ({ messages: [...state.messages, message] }))
	}

	sendMessage = (message) => {
		this.chatChannel.send({ message: message })
	}

	// Disconnect Websockets connection before window closes
	handleUnload = (e) => this.chatChannel.disconnect()

	componentDidMount = () => {
		fetch('/messages')
			.then(response => response.json())
			.then(data => {
				this.setState({ messages: data['messages'] })
			})

		window.addEventListener('beforeunload', this.handleUnload)
	}

	render() {
		return h`
		<div>
			<h1>Welcome to Chatterbox!</h1>
			${this.state.messages.map(message =>
				h`<${Message} message=${message} key="message-${message.id}" />`
			)}
			<${Chatbox} sendMessage=${this.sendMessage} />
		</div>
		`
	}
}

export default App
