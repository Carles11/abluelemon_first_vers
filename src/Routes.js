// @flow

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import AboutUs from './views/AboutUs'
import Contact from './views/Contact'
import Projects from './views/Projects'
import NotFound from './views/NotFound'

const Routes = () => 
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about-us" component={AboutUs} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route component={NotFound} />
  </Switch>

export default Routes