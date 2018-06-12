// 

import React from 'react'
import Helmet from 'react-helmet'

const AboutUs = () => 
  <section className="app-view">
    <Helmet 
      title='About Us'
      meta={[
        { name:"description", content: `About Us` },
        { property: "og:title", content: `About Us` }
      ]}
    />
    <h1>About Us</h1>  
  </section>

export default AboutUs