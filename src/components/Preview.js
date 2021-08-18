/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";
import BasicInfoDisplay from "./BasicInfoDisplay";
import EducationDisplay from "./EducationDisplay";
import SkillsDisplay from "./SkillsDisplay";
import WorkDisplay from "./WorkDisplay";
import { capitalize } from "./App";

export default class Preview extends Component {
  constructor(props) {
    super(props);
    this.printCV = this.printCV.bind(this);
  }

  printCV() {
    var divContents = document.getElementById("cv").innerHTML;
    var a = window.open("", "", "height=500, width=500");
    a.document.write(`
        <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
            rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous">
        </head>
        <body>
        ${divContents}
        </body>
        </html>
        `);
    a.document.close();
    a.print();
  }

  render() {
    return (
      <div className="col-lg-8 mb-4">
        <div className="row mb-2">
          <div className="col-3 ">
            <h3>Output</h3>
          </div>
          <div className="col-2 offset-2">
            <button className="btn btn-lg btn-success w-100" onClick={this.printCV}>
              Print
            </button>
          </div>
        </div>
        <div
          id="cv"
          className="container-fluid p-3"
          style={{ border: "2px solid black " }}
        >
          <div className="row">
            <h2 className="text-center my-4">
              {`${capitalize(this.props.info.firstName)} ${capitalize(this.props.info.lastName)}`}
            </h2>
          </div>
          <div className="row">
            <BasicInfoDisplay info={this.props.info} />
            <EducationDisplay education={this.props.education} />
          </div>
          <div className="row">
            <SkillsDisplay skills={this.props.skills} />
            <WorkDisplay work={this.props.work} />
          </div>
        </div>
      </div>
    );
  }
}
