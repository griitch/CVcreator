/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";
import uniqid from "uniqid";
import { capitalize } from "./App";


export default class EducationDisplay extends Component {
  render() {
    return (
      <div className="col-6 mb-2">
          <h4>Education : </h4>
          {this.props.education.map((deg) => (
            <ul key={uniqid()}>
              <h5>{capitalize(deg.degree)} </h5>
                <li  >
                  {`Issued from : ${  capitalize(deg.from)}`}
                </li>
                <li  >
                  {`Date of graduation : ${deg.date}`}
                </li>
            </ul>
          ))}
      </div>
    );
  }
}
