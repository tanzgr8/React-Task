import React,{ Component } from "react";
var name = prompt("Enter your name");
 class App extends Component{
     render(){
         return <h1>Hemmlo {name}</h1>
     }
 }
export default App;