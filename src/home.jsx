 import React,{Component} from 'react'
 import axios from 'axios'
 import Form from './formPlanet'
 export default class Home extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            list:[],
            planet:{}
        }
        this.handlerChange = this.handlerChange.bind(this)
    }
    componentWillMount() {
        axios.get('http://localhost:8081/planetas').then(resp => this.setState({list:resp.data}))

    }

    handlerChange(e) {
        const name = e.target.name;
        const value = e.target.value;
     //  this.setState({planet[name]:value} )
    }
    render() {
        console.log(this.state.list)
        const email = localStorage.getItem('@login/email')
        const senha = localStorage.getItem('@login/senha')
        if(email != null && senha != null){        
      return (<div className="homeComponent">
            <Form value={this.state.planet} onChange={this.handlerChange} />

        </div>)
        } else {
            return (
                <div>
                    <h1>404 not found</h1>
                </div>
            )
        }
    }
 };