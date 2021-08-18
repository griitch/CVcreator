/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function BasicInfoForms(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const liftInfoState = (e) => {
    e.preventDefault();
    props.onInfoChange({
      firstName,
      lastName,
      email,
      address,
      phone,
    });
  };

  return (
    <form onSubmit={liftInfoState}>
      <label className="form-label">first name </label>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="form-control"
        type="text"
      />

      <label className="form-label">last name </label>
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="form-control"
        type="text"
      />

      <label className="form-label">Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        type="email"
        placeholder="xyz@foo.baz"
      />

      <label className="form-label">address</label>
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="form-control mb-2"
        type="text"
      />

      <label className="form-label">phone: </label>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="form-control mb-2"
        pattern="[0-9]{10}"
        placeholder="0123456789"
        type="text"
      />

      <div className="text-center my-4">
        <button type="submit" className="btn btn-lg px-5 btn-success ">
          Save
        </button>
      </div>
    </form>
  );
}
