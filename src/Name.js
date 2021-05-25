import React, { Component } from 'react'
class Name extends Component{
state={
  name:"Taanzeel"
}
render() {
  return (
    <div>
      <h1>Hemllo {this.state.name}</h1>
    </div>
  )
}

}
export default Name;