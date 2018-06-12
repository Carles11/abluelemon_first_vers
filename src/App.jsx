// @flow

import React from 'react'
import Helmet from 'react-helmet'

import Routes from './Routes'
import Header from './components/Header'

import './css/App.css'

const App = () => 
  <main className="app-root">
    <Helmet titleTemplate={`%s | A Blue Lemon Productions`} defaultTitle="A Blue Lemon Productions" >
      <link rel="canonical" href="http://abluelemon.com" />
      <meta name="description" content='A Blue Lemon Productions is ...'  />
    </Helmet>
    <Header />
    <Routes />
  </main>

export default App