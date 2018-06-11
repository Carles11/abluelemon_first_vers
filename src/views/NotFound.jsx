// @flow

import React from 'react'
import Helmet from 'react-helmet'

const NotFound = () => 
  <section className="app-view">
    <Helmet 
      title='Not Found'
      meta={[
        { name:"description", content: 'Not Found' },
        { property: "og:title", content: 'Not Found' }
      ]}
    />
    <h1>Not Found</h1>  
  </section>

export default NotFound