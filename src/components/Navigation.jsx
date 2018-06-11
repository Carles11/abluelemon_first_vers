// @flow

import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  items: Array<Object>
}

const Navigation = (props: Props) => {
  const { items } = props

  return (
    <nav className="app-nav">
      <ul>
        {items.map(item => <li key={item.url}><Link to={item.url}>{item.name}</Link></li>)}
      </ul>
    </nav>
  )
}
  
export default Navigation