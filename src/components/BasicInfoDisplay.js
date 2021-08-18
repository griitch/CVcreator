/* eslint-disable react/prop-types */
import React from "react";

export default function BasicInfoDisplay(props) {
  return (
    <div className="col-6 mb-2">
      <h4>Personnal information :</h4>
      Email : {props.info.email} <br />
      phone : {props.info.phone} <br />
      Address : {props.info.address}
    </div>
  );
}
