import {useState} from 'react';
var name1;

function useName(){
const name= useState("TAnzeel");
const change=()=>{
  name1=document.getElementById("name").value;
  name[1](name1);
}
return{
  name,
  change
};
}

export default useName;