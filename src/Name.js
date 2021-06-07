import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
const Name = (props) => {
  return (
    <React.Fragment>
      <div className="container ct2">
        <h1>You Entered:</h1>
        <h3>Name : {props.name}</h3>
        <h3>Country : {props.country}</h3>
        <h3>Capital : {props.capital}</h3>

        <Link className="btn btn-primary btn-lg" role="button" to="/">
          EDIT
        </Link>
      </div>
    </React.Fragment>
  );
};
export default Name;
