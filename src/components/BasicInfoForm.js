/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";

export default class FormsContainer extends Component {
  constructor(props) {
    super(props);
    this.liftInfoState = this.liftInfoState.bind(this);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.updatePhone = this.updatePhone.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    };
  }

  liftInfoState(e) {
    e.preventDefault();
    this.props.onInfoChange(this.state);
  }

  updateFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  updateLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  updateAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  updatePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={this.liftInfoState}>
        

          <label className="form-label">first name </label>
          <input
            value={this.state.firstName}
            onChange={this.updateFirstName}
            className="form-control"
            type="text"
          />

          <label className="form-label">last name </label>
          <input
            value={this.state.lastName}
            onChange={this.updateLastName}
            className="form-control"
            type="text"
          />

          <label className="form-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.updateEmail}
            className="form-control"
            type="email"
            placeholder = "xyz@foo.baz"
          />

          <label className="form-label">address</label>
          <input
            value={this.state.address}
            onChange={this.updateAddress}
            className="form-control mb-2"
            type="text"
          />

          <label className="form-label">phone: </label>
          <input
            value={this.state.phone}
            onChange={this.updatePhone}
            className="form-control mb-2"
            pattern="[0-9]{10}"
            placeholder = "123456789"
            type="text"
          />

          <button type="submit" className="btn btn-sm btn-success ">
            Save
          </button>
   
        <hr />
      </form>
    );
  }
}
