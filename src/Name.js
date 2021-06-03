import React, { Component } from 'react'

export default class Name extends Component {
 
  render() {
    return (
      <React.Fragment>
        <h1>You Entered:</h1>
        <h3>Name : {this.props.data.name}</h3>
        <h3>Country : {this.props.data.country}</h3>
        <h3>Capital : {this.props.data.capital}</h3>

      </React.Fragment>
    )
  }
}
