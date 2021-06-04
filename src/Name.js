import React from 'react'
const Name =(props)=>{
  return(<React.Fragment>
<h1>You Entered:</h1>
<h3>Name : {props.data.name}</h3>
<h3>Country : {props.data.country}</h3>
<h3>Capital : {props.data.capital}</h3>
</React.Fragment>
  )
}
export default Name;