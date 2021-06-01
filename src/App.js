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
    }
  }
  valid=()=>{
    if(!this.state.name.includes("@")&&this.state.pass.length<5)
    {this.setState({
      nameerr:"Invalid Email",
      passerr:"Password Should Be atleast 6 characters long"
    })
  return false;}
    else if(!this.state.name.includes("@")){
      this.setState({
        nameerr:"Invalid Email",
        passerr:""
      })
      return false;
    }
    else if(this.state.pass.lenght<5){
      this.setState({
        nameerr:"",
        passerr:"Password Should Be atleast 6 characters long"
      })
      return false;
     } else{
      this.setState({
        nameerr:"",
        passerr:""
      })
      return true;
    }
  }
  render() {
    return (
  <React.Fragment>
    <h1>Hemlllo </h1>
    <form>
      Input EmailId <input name="Email" type="text"onChange={(e)=>{this.setState({name:e.target.value})}} />
      <p>{this.state.nameerr}</p>
      Input Pasword <input name="pass"type="text" onChange={(e)=>{this.setState({pass:e.target.value})}} />
      <p>{this.state.passerr}</p>
      <input type="submit" value="Submit" onClick={(e)=>this.handleSubmit(e)}/>
    </form>
  </React.Fragment>
    )
  } 
}


