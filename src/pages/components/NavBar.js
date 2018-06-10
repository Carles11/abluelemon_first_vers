import React from 'react'
import BurgerMenu from './Burgermenu.js'

export default class Navbar extends React.Component{
    selectPage = e =>{
		this.props.changePage(e.target.id)	
	}
    render() {
        return(
            <div>
            <nav>
                <ul>
                    <li className='navbar_item_l'><BurgerMenu handleClick = {this.props.handleClick}/></li>
                    <li className='navbar_item_r'>
                        <img 
                            className="logo" 
                            src="/img/blue-lemon-logo_new.png" 
                            alt="a blue lemon productions logo" 
                            onClick={this.selectPage.bind(this)}
                            /></li>                
                </ul>
             </nav>
        </div>
        )
    }
}