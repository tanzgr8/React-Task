import React, { Component } from 'react'
import Name from './Name';
let data;

export default class App extends Component {
constructor(){
super();
this.state={
name:"",
country:"",
capital:"",
send:false
}
} 
renderName = () => {
  if (this.state.send) {
    return <Name data={data}/>;
  } 
}
Change=(e)=>{
  e.preventDefault();
 this.setState({send:true});
data=this.state;
console.log(data);
}
handleChange=e=>{
  this.setState({[e.target.name]:e.target.value});
}
  render() {
   const  renderName = () => {
     console.log(this.state.send);
      if (this.state.send) {
        return <Name data={data}/>;
      } 
    }
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
      </form>
     {
       renderName()
     }
    </React.Fragment>
    )
  }
}
