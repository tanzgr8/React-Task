import React, { Component } from "react";

export class App extends Component {
state={
  value:"Tanzeel"
};
handleChange=(e)=>{
this.setState({value : e.target.value.toUpperCase()});
}
  render() {
    return (
    <>
    <form>
      <input type="text" value={this.state.value} onChange={this.handleChange} />

    </form>
    </>);
  }
}
export default App;
