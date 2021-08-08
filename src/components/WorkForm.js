/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";

export default class WorkForm extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.toggleFormActive = this.toggleFormActive.bind(this);
  }

  toggleFormActive() {
    this.setState((prevState) => {
      return { isActive: !prevState.isActive };
    });
  }

  render() {
    return (
      <div>
        {!this.state.isActive && (
          <button 
          className = 'btn btn-outline-primary'
          onClick={this.toggleFormActive}>add work Experience</button>
        )}
        {this.state.isActive && (
          <form>
            <fieldset>
            <legend>Enter informations of about the work experience :</legend>
            <label className="form-label">Role : </label>
            <input className="form-control" type="text" /> <br />
            <label className="form-label">Company name : </label>
            <input className="form-control" type="text" /> <br />
            <label className="form-label">worked from : </label>
            <input className="form-control" type="date" /> <br />
            <label>to : </label>
            <input className="form-control" type="date" /> <br />
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                className="btn btn-success "
                onClick={this.toggleFormActive}
                >
                save
              </button>
              <button
                onClick={this.toggleFormActive}
                className="btn btn-danger"
                >
                discard
              </button>
            </div>
            </fieldset>
          </form>
        )}
      </div>
    );
  }
}
