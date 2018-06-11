// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App.jsx'

const rootEl = document.getElementById('root')
const wrapApp = AppComponent => <Router><AppComponent /></Router>

ReactDOM.render(wrapApp(App), rootEl)
