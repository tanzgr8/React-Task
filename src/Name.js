import React,{useState} from 'react';
var name1;

function Name(){
const name= useState("TAnzeel");
const change=()=>{
  name1=document.getElementById("name").value;
  name[1](name1);
}
return(
  <React.Fragment>
    <h1> Name : {name[0]}</h1>
   <input type="text" id="name"></input>
    <button type="button" onClick={change}>ClickME</button>
  </React.Fragment>
);

}

export default Name;