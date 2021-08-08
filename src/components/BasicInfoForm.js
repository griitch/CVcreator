/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";

export default class FormsContainer extends Component {
  render() {
    return (
        <form >
          <fieldset>
            <legend>Enter your basic infos : </legend>

            <label className ="form-label" >first name </label>
            <input className="form-control" type="text"  /> 
            <label className ="form-label">last name </label>
            <input className="form-control"  type="text"  /> 
            <label className ="form-label">date of birth</label>
            <input className="form-control" type="date" />
            <label className ="form-label">address</label>
            <input className="form-control mb-3" type="text" /> 
  
          </fieldset>
          <hr />
        </form>
    );
  }
}
