
import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect  } from "react-router-dom";
 export default class Login extends React.Component {
 
  constructor(props) {
    super(props);
this.handlerOnChange = this.handlerOnChange.bind(this);
this.handlerOnSubmit = this.handlerOnSubmit.bind(this); 

    this.state = {
      email:'',
      senha:'' 
      };
  }
handlerOnSubmit(event) {
 const email = this.state.email;
const senha = this.state.senha;
// if(email === 'admin' && senha==='admin'){

localStorage.setItem('@login/email', this.state.email)
localStorage.setItem('@login/senha', this.state.senha)

// return <Redirect  to='/home'/>
// } else {
//   return <Redirect  to='/login'/>
// }
     console.log("Email: "+ this.state.email+ " senha: "+ this.state.senha)
}

handlerOnChange(event) {
  const {name, value} = event.target;
  this.setState({[name]:value})
  
  console.log("Email: "+ this.state.email+ " senha: "+ this.state.senha)
}

  render() {
    return (
      <div className="formBox">      
      <form >
      <label>Email</label>
      <input type="text" value={this.state.email} name="email" onChange={this.handlerOnChange}/>
      <label>Senha</label>
<input type="password" value={this.state.senha} name="senha" onChange={this.handlerOnChange}/>
         
        <button value="enviar" onClick={this.handlerOnSubmit()} disabled={!this.state.email || !this.state.senha }>Enviar</button>
      </form>
      </div>
    );
  }
  }