/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";

export default class FormsContainer extends Component {
  constructor(props) {
    super(props);
    this.liftInfoState = this.liftInfoState.bind(this);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateDateOfBirth = this.updateDateOfBirth.bind(this);
    this.updateAddress = this.updateAddress.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      address: "",
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

  updateDateOfBirth(e) {
    this.setState({
      dateOfBirth: e.target.value,
    });
  }

  updateAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.liftInfoState}>
        <fieldset>
          <legend>Enter your basic infos : </legend>

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

          <label className="form-label">date of birth</label>
          <input
            value={this.state.dateOfBirth}
            onChange={this.updateDateOfBirth}
            className="form-control"
            type="date"
          />

          <label className="form-label">address</label>
          <input
            value={this.state.address}
            onChange={this.updateAddress}
            className="form-control mb-2"
            type="text"
          />

          <button type="submit" className="btn btn-sm btn-success ">
            Save
          </button>
        </fieldset>
        <hr />
      </form>
    );
  }
}
