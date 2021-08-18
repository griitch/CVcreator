/* eslint-disable react/prop-types */

import React from "react";
import uniqid from "uniqid";
import { capitalize } from "./App";

export default function WorkDisplay(props) {
  return (
    <div className="col-6 mb-2">
      <h4>Work experience :</h4>
      {props.work.map((work) => (
        <ul key={uniqid()}>
          <h5>
            {`${capitalize(work.role)} at ${capitalize(work.companyName)}`}{" "}
          </h5>
          <li>{`From : ${work.from}`}</li>
          <li>{`To : ${work.to}`}</li>
        </ul>
      ))}
    </div>
  );
}
