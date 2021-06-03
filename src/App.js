import React, { Component } from 'react'
import Name from './Name';
var data;
export default class App extends Component {
constructor(){
super();
this.state={
name:"",
country:"",
capital:""
}
}
Change=(e)=>{
  e.preventDefault();
data=this.state;
console.log(data);
}
handleChange=e=>{
  this.setState({[e.target.name]:e.target.value});
}
  render() {
    return (
    <React.Fragment>
      <form>
        <label>Name
        <input type="text" name="name" onChange={this.handleChange}/>
        </label>
        <label>Country
        <input type="text" name="country" onChange={this.handleChange}/>
        </label>
        <label>capital
        <input type="text" name="capital" onChange={this.handleChange}/>
        </label>
        <button onClick={this.Change}>SUBMIT</button>
        <Name  data={this.state}/>
      </form>
    </React.Fragment>
    )
  }
}
