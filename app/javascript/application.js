// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "channels"
import React from 'react'
import ReactDOM from 'react-dom'

import h from 'helpers/createElement'
import App from 'components/App'

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		h`<${App}/>`,
		document.getElementById('app'),
	)

})
