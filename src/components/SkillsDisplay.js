/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";
import uniqid from "uniqid";

export default class SkillsDisplay extends Component {
  render() {
    return (
      <div className="col-6">
        <h4>Skills : </h4>
        <ul>
          {this.props.skills.map((skill) => (
            <li key={uniqid()}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}
