 import React,{Component} from 'react'
 import axios from 'axios'
 export default class Home extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            list:[],
            planet:{             
                name:'',
                climate:'',
                terrain:''
            }
        }
        this.handlerChange = this.handlerChange.bind(this)
        this.save = this.save.bind(this)
    }
    componentWillMount()  {
        axios.get('http://localhost:8080/planetas').then(resp => this.setState({list:resp.data}))

    }
    save(e){
        const planet = {...this.state.planet}
        debugger
        axios.post('http://localhost:8080/planetas', planet)
    }

    handlerChange(e) {
        debugger
        const planet = {...this.state.planet};
        const value = e.target.value;
        planet[e.target.name] = value;
     this.setState({planet} )
    }
    render() {
             
      return (
      <div className="homeComponent">
                
                    <label>Name</label>
                    <input onChange={this.handlerChange} value={this.state.planet.name}name="name" type="text"/>
                    <label>Climate</label>
                    <input onChange={this.handlerChange} value={this.state.planet.climate}name="climate" type="text"/>
                    <label>Terrain</label>
                    <input onChange={this.handlerChange} value={this.state.planet.terrain} name="terrain"type="text"/>
                    <button onClick={this.save}>Salvar</button>
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>Climate</th>
                            <th>Terrain</th>
                        </thead>
                        <tbody>

                    {
                        
                        this.state.list.map(planet => {
                            
                            return (
                                <tr>
                                <td>{planet.name}</td>
                                <td>{planet.climate}</td>
                                <td>{planet.terrain}</td>
                                </tr>
                            )
                        }
                       

                            )
                        }
                        </tbody>
                    
                        </table>
                    
                    </div> 

                

                 )
       
        
    }
 };