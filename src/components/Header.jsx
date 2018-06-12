// @flow

import React from 'react'
import Navigation from './Navigation'

const nav = [
  { name: 'Home', url: '/' },
  { name: 'About us', url: '/about-us' },
  { name: 'Projects', url: '/projects' },
  { name: 'Contact', url: '/contact' },
]

type State = {
  showMenu: boolean
}

class Header extends React.Component<*, State> {
  state: State = {
    showMenu: false
  }

  handleClick = () => {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }))
  }

  render() {
    const { showMenu } = this.state
    const classBtn = showMenu ? 'icon-cross' : 'icon-menu'

    return (
      <div className='app-header'>
        <button 
          onClick={this.handleClick}
          className={`btn ${classBtn}`} 
        />
        {showMenu && <Navigation items={nav} />}
      </div>
    )
  }
}

export default Header