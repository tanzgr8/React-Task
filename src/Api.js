import React, { Component } from 'react';
import axios from 'axios';


export default class Api extends Component {
    constructor(){
        super();
    this.state={
arr:[]
    }
    }
    componentDidMount(){
        axios.get("https://restcountries.eu/rest/v2/all").then(
            (resolve)=>{
                this.setState({arr:resolve.data});

            },
            (reject)=>{
                console.log(reject);
            }
        );
    }
    render() {
        return (
          <>
          <table border="1" align="center">
              <thead>
                  <tr>
                      <th>S/N</th>
                      <th>Name</th>
                      <th>Capital</th>
                      <th>Flag</th>
                  </tr>

              </thead>
              <tbody>
                  {this.state.arr.map((el,i)=>(
                    <tr key={i}>
                        <td>{i}</td>
                        <td>{el.name}</td>
                        <td>{el.capital}</td>
                        <td><img src={el.flag} height="80px" width="80px"/></td>
                    </tr>    
                  )
                  )}
              </tbody>
          </table>
          </>
        )
    }
}
