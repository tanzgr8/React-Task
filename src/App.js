import React from "react";
import useName from "./Name";
// import Name from "./Name"
const App =()=>{
  const name = useName();
  return(
    <React.Fragment>
    <h1> Name : {name.name}</h1>
   <input type="text" id="name"></input>
    <button type="button" onClick={name.change}>ClickME</button>
  </React.Fragment>
  )
}
export default App;