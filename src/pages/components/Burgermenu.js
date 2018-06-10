import React from 'react'

export default class BurgerMenu extends React.Component {

    render() {
        return (
            <div 
                className="mainBurger"
                onClick= {this.props.handleClick}>
                <div
                    className="burger"></div>
                <div
                    className="burger"></div>
                <div
                    className="burger"></div>
            </div>
        )
    }
}
