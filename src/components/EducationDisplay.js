/* eslint-disable react/prop-types */
import React from "react";
import uniqid from "uniqid";
import { capitalize } from "./App";


export default function EducationDisplay( props ) {
    return (
      <div className="col-6 mb-2">
          <h4>Education : </h4>
          { props.education.map((deg) => (
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
