/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";
import uniqid from "uniqid";
import { capitalize } from "./App";

export default class WorkDisplay extends Component {
  render() {
    return (
      
        <div className="col-6 mb-2">
          <h4>Work experience :</h4>
          {this.props.work.map((work) => (
            <ul key={uniqid()}>
              <h5>{`${capitalize(work.role)} at ${capitalize(work.companyName)}`} </h5>
              <li>{`From : ${work.from}`}</li>
              <li>{`To : ${work.to}`}</li>
            </ul>
          ))}
        </div>
    );
  }
}
