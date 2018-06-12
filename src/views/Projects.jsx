// 

import React from 'react'
import Helmet from 'react-helmet'

const Projects = () => 
  <section className="app-view">
    <Helmet 
      title='Projects'
      meta={[
        { name:"description", content: 'Projects' },
        { property: "og:title", content: 'Projects' }
      ]}
    />
    <h1>Projects</h1>  
    <p>A Blue Lemon Productions finds itself in the early stages of creation and is still in the process of being formed as the organizer of the first Latin World Music Festival in Dubai (UAE).</p>
  </section>

export default Projects