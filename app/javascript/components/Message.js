import { Component } from 'react'
import PropTypes from 'prop-types'

import h from 'helpers/createElement'

class Message extends Component {
	render() {
		return h`
			<p>${this.props.message.body}</p>
		`
	}
}

Message.propTypes = {
	message: PropTypes.string.isRequired,
	fuck: PropTypes.string.isRequired,
}

export default Message
