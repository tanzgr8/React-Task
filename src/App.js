import React, { Component } from "react";

export class App extends Component {
  state = {
    name: "Tanzeel",
    pass:""
  };
  handleChange = (e) => {
   const value =e.target.name==="pass"?e.target.value.toUpperCase():e.target.value;
   this.setState({[e.target.name]:value})
  };
  render() {
    return (
      <>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="text"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </>
    );
  }
}
export default App;
