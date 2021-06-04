import React, { Component } from 'react'
import Name from './Name';
import "./app.css"
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

Change=(e)=>{
  e.preventDefault();
 this.setState({send:true});
data=this.state;
console.log(data);
}
edit=()=>{
this.setState({send:false});
}
handleChange=e=>{
  this.setState({[e.target.name]:e.target.value});
}
  render() {
   const  renderName = () => {
     console.log(this.state.send);
      if (this.state.send) {
        return <div className="container ct2"><Name data={data}/><br/><button onClick={this.edit}  className="btn btn-primary">EDIT</button></div>;
      } else{
        return(<React.Fragment>
        <div className="container ct">
        <form><div class="mb-3 row">
          <label className=" col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" name="name" className="form-control form-control-sm" value={this.state.name} onChange={this.handleChange} />
          </div>
        </div>
        <div class="mb-3 row">
        <label className=" col-sm-2 col-form-label" >Country</label>
          <div class="col-sm-10">
          <input type="text" name="country"  className="form-control form-control-sm" value={this.state.country} onChange={this.handleChange}/>
          </div>
        </div>
        <div class="mb-3 row">
          <label className=" col-sm-2 col-form-label">Capital</label>
          <div class="col-sm-10">
            <input type="text" name="capital" className="form-control form-control-sm"value={this.state.capital} onChange={this.handleChange} />
          </div>
        </div>
        
        
        <button onClick={this.Change} className="  btn btn-primary mar">SUBMIT</button>
      </form>
      </div>
     
     
    </React.Fragment>)
      }
    }
    return (
  
      
       renderName()

     
    )
      }
    }
