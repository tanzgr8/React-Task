import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      pass:"",
      nameerr:"",
      passerr:""
    };
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    if(this.valid()){
      alert("Form Submitted");
      this.setState({
        nameerr:"",
        passerr:""
      })
    }
  }
  valid(){
    if(!this.state.name.includes("@")&&this.state.pass.length<5)
    {this.setState({
      nameerr:"Invalid Email",
      passerr:"Password Should Be atleast 6 characters long"
    })
  return false;}
    else if(!this.state.name.includes("@")){
      this.setState({
        nameerr:"Invalid Email"
      })
      return false;
    }
    else if(this.state.pass.lenght<5){
      this.setState({
        passerr:"Password Should Be atleast 6 characters long"
      })
      return false;
     } else{
      return true;
    }
  }
  render() {
    return (
  <React.Fragment>
    <h1>Hemlllo </h1>
    <form >
      Input EmailId <input type="text"onChange={(e)=>{this.setState({name:e.target.value})}} />
      <p>{this.state.nameerr}</p>
      Input Pasword <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}} />
      <p>{this.state.passerr}</p>
      <input type="submit" value="Submit" onClick={this.handleSubmit(e)}/>
    </form>
  </React.Fragment>
    )
  } 
}


