import logo from './logo.svg';
import './App.css';
import './My.css';
import React,{ Component } from 'react';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Photography from './components/Photography';
import Cinematography from './components/Cinematography';
import Contact from './components/Contact';

class App extends Component{
  state = {
    active: 'Home'
  }
  handleClick = (e)=>{
    this.setState({active: e.target.innerHTML})
    console.log(e.target.innerHTML, window.innerWidth <= 700 ? 'mobile' : 'desktop');
  }
  render(){
    let navbarPages = {marginLeft:20,marginRight: 20,textDecoration: 'none',};
    // let photographyStyle;
    // let homeStyle;


  return (
    <div>
        <div style={{display: 'flex',justifyContent: 'space-between', backgroundColor: 'black', paddingTop: 17, paddingRight: 20, paddingLeft: 20, paddingBottom: 17}}> 
        <div style={{color: 'white'}}> Logo</div>
        <div >
            <NavLink to="/" onClick={this.handleClick} style={Object.assign({}, this.state.active === 'Home' ? {color: '#ffffff'} : {color: '#757575'}, navbarPages)}>Home</NavLink>
            <NavLink
            to="/about"
            onClick={this.handleClick}
            style={Object.assign({}, this.state.active === 'About' ? {color: '#ffffff'} : {color: '#757575'}, navbarPages)}
            >
            About
            </NavLink>
            <NavLink 
            to="/photography" 
            onClick={this.handleClick} 
            style={Object.assign({}, this.state.active === 'Photography' ? {color: '#ffffff'} : {color: '#757575'}, navbarPages)}
            >
              Photography
            </NavLink>
            <NavLink
            to="/cinematography"
            onClick={this.handleClick}
            style={Object.assign({}, this.state.active === 'Cinematography' ? {color: '#ffffff'} : {color: '#757575'}, navbarPages)}
            >
            Cinematography
            </NavLink>
            <NavLink
            to="/Contact"
            onClick={this.handleClick}
            style={Object.assign({}, this.state.active === 'ContactUs' ? {color: '#ffffff'} : {color: '#757575'}, navbarPages)}
            >
            ContactUs
            </NavLink>
        </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/cinematography" element={<Cinematography />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </div>
  );}
}

export default App;
