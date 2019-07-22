import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { render } from 'react-dom';
import Login from './login'
import Home from './home.jsx'
 

class App extends Component {
  constructor(props){
    super(props)
    this.logout = this.logout.bind(this)
  }
logout(e) {
  debugger
      localStorage.removeItem('@login/email')
      localStorage.removeItem('@login/senha')
     return <Redirect to='/' />
}


render() {
  debugger
  const email = localStorage.getItem('@login/email')
  const senha = localStorage.getItem('@login/senha')
  
 
  return(
    <div className="router">
    <Router>
      <nav>    
        <ul>        
            <li><Link to='/'> Login</Link></li>          
            <li><Link to='/home'> Home</Link></li>       
        </ul>
      </nav>         
        <Route path='/' component={Login}/>
        <Route path='/home' component={Home}/>
    </Router>
    </div>
       )
     
  
}

}

render(<App />, document.getElementById('root'));
