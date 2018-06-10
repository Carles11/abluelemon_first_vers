
import React from 'react';
import Home from './pages/Home.js'
import NavBar from './pages/components/NavBar.js'
import NavbarMenu from './pages/components/NavbarMenu.js'
import AboutUs from './pages/AboutUs.js'
import Contact from './pages/Contact.js'
import Projects from './pages/Projects.js'
import './App.css';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            display:'none',
            active: false,
            page:""
        }
        this.handleClick= this.handleClick.bind(this)
        this.handleClack= this.handleClack.bind(this)
        this.changePage=  this.changePage.bind(this)
    }
    changePage(page){ 
        this.setState({page:page,display:"none",active:false})   
      }
    handleClick(){
    this.setState({display:"block",active:true})
    }
    handleClack(){
    this.setState({display:"none",active:false})
    }
render() {
    let style = {display: this.state.display}
    let active = {active: this.state.active}
    const activeClass= this.state.active ? "active" : ""
    let page  = this.state.page || 'Home'
    let shown
    if(page === 'Home') {
        shown = <Home />
    }else if(page === 'AboutUs'){
        shown = <AboutUs />
    }else if(page === 'Projects'){
        shown = <Projects />
    }else if(page === 'Contact'){
        shown = <Contact />
}
return (
    <div>
        <nav 
            style= {active}
            className="main_nav">
                <NavBar 
                handleClick = {this.handleClick}
                changePage={this.changePage}/>
        </nav>
        <div 
            className="navbar_white"
            className={`navbar_white ${activeClass}`}
            style= {style}>
            <NavbarMenu 
              handleClack={this.handleClack}
              changePage={this.changePage}/>
        </div>
    {shown} 
    </div>
);
}
}
export default App; 