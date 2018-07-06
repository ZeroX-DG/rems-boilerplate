import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import './render/lib/styles/reset'
import './render/lib/styles/utility'
import './render/lib/icons'
import './render/lib/styles/theme'

import Main from './render/main.jsx'

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>,
  document.getElementById('app')
)
