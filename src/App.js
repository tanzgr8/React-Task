import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.textInput=React.createRef();
    this.state={
      value:""
    };
  }
  handleSubmit=e=>{
    e.preventDefault();
    this.setState({value:this.textInput.current.value});
  }
  
  render() {
    return (
  <React.Fragment>
    <h1>Hemlllo {this.state.value}</h1>
    <form onSubmit={this.handleSubmit}>
      Input Name <input type="text" ref={this.textInput}/>
      <input type="submit" value="Submit"/>
    </form>
  </React.Fragment>
    )
  }
}


