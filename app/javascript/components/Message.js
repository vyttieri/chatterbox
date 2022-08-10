import { Component } from 'react'

import h from 'helpers/createElement'

class Message extends Component {
	render() {
		return h`
			<p>${this.props.message.body}</p>
		`
	}
}

export default Message
