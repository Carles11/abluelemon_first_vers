// @flow

import React from 'react'
import Helmet from 'react-helmet'

const Contact = () =>
<section className="app-view">
  <Helmet 
    title='Contact'
    meta={[
      { name:"description", content: 'Contact' },
      { property: "og:title", content: 'Contact' }
    ]}
  />
  <h1>Contact</h1>
  <div className="text_contact contact_bg">
    <h2>Contact aBlueLemon Productions has representation in UAE, Spain and Germany.</h2>
    <h3>Please contact us under:</h3>

    <p>Phone: 0049-(0)1782871785</p>
    <p>E-mail: <a 
        href="mailto:info@abluelemon.com?subject=Mail from aBlueLemon Site"
        className="link">info@abluelemon.com</a>
    </p>
  </div>  
</section>

export default Contact