// @flow

import React from 'react'
import Helmet from 'react-helmet'

const Home = () => 
  <section className="app-view">
    <Helmet 
      title='Home page'
      meta={[
        { name:"description", content: `Home Page` },
        { property: "og:title", content: `Home page` }
      ]}
    />
    <h1>Home...</h1>  
  </section>

export default Home