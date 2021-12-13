import React, { Component } from 'react';
import "./App.css";
import logo from "./images/ocin-removebg-preview.png"
import logo2 from "./images/download-removebg-preview.png"
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      active: false,
      href: "#"
    }

  }
  render() {
    const clic = ()=>{
      this.setState({
        active: !this.state.active 
      })
    }
    return (
      <div className='wrapper'>
        <div className='card'>
{
  this.state.active? <img src={logo} alt="" />: 
          <img src={logo2} className='logo2' alt="" />
}      
        <h1>{this.state.active ? "Create account" : "Welcome!"}</h1>
        <input type="text" placeholder='Name' />
        {
          this.state.active && <input type="email" placeholder='Email' />
        }
        <input type="text" placeholder='Password' />
        <button>{this.state.active ? "Create" : "Login" }</button>
        <a href={this.state.href} onClick={()=>clic()}>{this.state.active ? "Sign In" : "Create account"}</a>
        </div>
      </div>
    )
  }
}
