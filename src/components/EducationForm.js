import uniqid from "uniqid";
/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function EducationForm(props) {
  const [isActive, setIsActive] = useState(false);
  const [degree, setDegree] = useState("");
  const [from, setFrom] = useState("");
  const [date, setDate] = useState("");

  const toggleFormActive = () => {
    setIsActive((prev) => !prev);
    setFrom("");
    setDate("");
    setDegree("");
  };

  return (
    <div>
      {!isActive && (
        <button
          className="btn btn-outline-primary mb-2"
          onClick={toggleFormActive}
        >
          add education
        </button>
      )}
      {isActive && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const id = uniqid();
            props.onEducationAdd({ degree, from, date, id });
          }}
        >
          <fieldset>
            <legend>Enter information about the degree</legend>
            <label className="form-label">degree : </label>
            <input
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              required
              className="form-control"
              type="text"
            />{" "}
            <br />
            <label className="form-label">issued from : </label>
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
              className="form-control"
              type="text"
            />{" "}
            <br />
            <label className="form-label">date of graduation : </label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="form-control"
              type="date"
            />{" "}
            <br />
            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-success ">
                save
              </button>

              <button onClick={toggleFormActive} className="btn btn-danger">
                discard
              </button>
            </div>
          </fieldset>
        </form>
      )}
    </div>
  );
}
