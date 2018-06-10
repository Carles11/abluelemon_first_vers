import React from 'react'
import CrossMenu from './CrossMenu'

export default class NavbarMenu extends React.Component{   
    selectPage = e =>{
		this.props.changePage(e.target.id)	
	}
    render(){
        return(
            <div 
                className="polygon_nav main_nav">
                <nav>
                    <ul>
                        <li className='navbar_item_l'><CrossMenu handleClack={this.props.handleClack}/></li>
                        <li className='navbar_item_r'>
                        <img 
                            id="Home"
                            className="logo" 
                            src="/img/aBlueLemonOutside.png" alt="a blue lemon logo" 
                            onClick={this.selectPage.bind(this)}/></li>                
                    </ul>
                </nav>
                    <h1 className="nav_title">aBlueLemon</h1>
                    <h3 className="nav_subtitle">  </h3>
                <nav className="menu_nav">
                <ul>
                    <li id="AboutUs"
                        className='poly_item_l'
                        onClick={this.selectPage.bind(this)}>ABOUT US</li>
                    <li id="Projects"
                        className='poly_item_c'
                        onClick={this.selectPage.bind(this)}>PROJECTS</li>
                    <li id="Contact"
                        className='poly_item_r'
                        onClick={this.selectPage.bind(this)}>CONTACT</li>
                </ul>
                </nav>
            </div>
        )
    }
}