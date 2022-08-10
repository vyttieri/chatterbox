import { Component } from 'react'

import h from 'helpers/createElement'

export default class Chatbox extends Component {
  constructor(props) {
    super(props)

    this.state = { value: '' }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })

    e.preventDefault()
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.sendMessage(this.state.value)
      this.setState({ value: '' })

      event.preventDefault()
    }
  }

  render() {
    return h`
      <input
        type="text"
        value=${this.state.value}
        onChange=${this.handleChange}
        onKeyPress=${this.handleKeyPress}
      />
    `
  }
}
