import React, { Component } from 'react'
import Name from './Name'

export default class App extends Component {
constructor(){
super();
this.state={
name:"",
country:"",
capital:""
}
}
handleChange=e=>{
  const value=e.target.value;
  this.setState({[e.target.name]:value});
}
  render() {
    return (
    <React.Fragment>
      <form>
        <label>Name
        <input type="text" name={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>Country
        <input type="text" name={this.state.country} onChange={this.handleChange}/>
        </label>
        <label>capital
        <input type="text" name={this.state.capital} onChange={this.handleChange}/>
        </label>
        <Name  data={this.state}/>
      </form>
    </React.Fragment>
    )
  }
}
