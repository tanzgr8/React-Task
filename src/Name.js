import React from 'react'
const Name =(props)=>{
  return(<React.Fragment>
<h1>You Entered:</h1>
<h3>Name : {props.name}</h3>
<h3>Country : {props.country}</h3>
<h3>Capital : {props.capital}</h3>
</React.Fragment>
  )
}
export default Name;