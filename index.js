import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { render } from 'react-dom';
import Login from './login'
import Home from './home'
import Hello from './Hello';
import './style.css';

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
  if(email != null && senha != null) {
   return (
      <div className="router">
     <Router>
      <nav>    
        <ul>
            <li><Link to='/home'> Home </Link></li>
             <li><button onClick={this.logout}>Logout</button></li>
        </ul>
      </nav>
         <Route path='/' component={Home}/>
  </Router>
  </div>)
  } else {
 
  return(
    <div className="router">
    <Router>
      <nav>    
        <ul>        
            <li><Link to='/'> Login</Link></li>          
        </ul>
      </nav>         
        <Route path='/' component={Login}/>
       
    </Router>
    </div>
       )
     }
  
}

}

render(<App />, document.getElementById('root'));
