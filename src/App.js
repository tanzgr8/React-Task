import React, { Component } from 'react'
class App  extends Component{
  constructor(props){
    super(props);
    this.state ={
      name:"Tanzeel",
      roll: this.props.roll
    };
  }
  render(){
    return( <>
     <h1>Hemllo {this.state.name} and your roll number is {this.state.roll}</h1>
     <button onClick={this.handleClick}> Click Me</button>
    </>
    );
  }
  handleClick=()=>{
    console.log("CLicked ",this)
  }
}
export default App;