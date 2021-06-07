import React, { useState } from "react";
import Name from "./Name";
import "./app.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
export default function App() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [capital, setCapital] = useState("");
  const [send, setSend] = useState(false);

  const Change = (e) => {
    e.preventDefault();
    setSend(true);
  };
  const Edit = () => {
    setSend(false);
  };

  return (
    <main>
      <Switch>
        <Route
          exact
          path="/result"
          render={(props) => (
            <Name name={name} country={country} capital={capital} />
          )}
        />

        <React.Fragment>
          <div className="container ct">
            <form>
              <div class="mb-3 row">
                <label className=" col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label className=" col-sm-2 col-form-label">Country</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    name="country"
                    className="form-control form-control-sm"
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label className=" col-sm-2 col-form-label">Capital</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    name="capital"
                    className="form-control form-control-sm"
                    value={capital}
                    onChange={(e) => {
                      setCapital(e.target.value);
                    }}
                  />
                </div>
              </div>
              <Link
                className="btn btn-primary btn-lg"
                role="button"
                to="/result"
              >
                Submit
              </Link>
            </form>
          </div>
        </React.Fragment>
      </Switch>
    </main>
  );
}
