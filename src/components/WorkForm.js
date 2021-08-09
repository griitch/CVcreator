/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";
import uniqid from 'uniqid';

export default class WorkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
       isActive: false,
       companyName : '',
       role : '',
       from : '',
       to : '', 
       
    };
    this.toggleFormActive = this.toggleFormActive.bind(this);
    this.updateRole = this.updateRole.bind(this);
    this.updateCompany = this.updateCompany.bind(this);
    this.updateFrom = this.updateFrom.bind(this);
    this.updateTo = this.updateTo.bind(this);
    this.addWork = this.addWork.bind(this);
  }

  toggleFormActive() {
    this.setState( prevState => {
        return { isActive : !prevState.isActive,
          companyName : '',
          role : '',
          from : '',
          to : '', 
        }
    })
}

  updateRole( e ) {
    this.setState({
      role: e.target.value
    })
  }

  updateCompany( e ) {
    this.setState({
      companyName: e.target.value
    })
  }

   updateFrom( e ) {
    this.setState({
      from: e.target.value
    })
  } 

  updateTo( e ) {
    this.setState({
      to: e.target.value
    })
  }

  addWork( e ) {
    e.preventDefault();
    const { companyName, role, from, to } = this.state;
    const id = uniqid();
    this.props.onWorkAdd({ companyName, role, from, to, id });
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
          <form onSubmit = { this.addWork }>
            <fieldset>

            <legend>Enter informations about the work experience :</legend>

            <label className="form-label">Role : </label>
            <input
            onChange = { this.updateRole }
            value = { this.state.role }
            className="form-control" type="text"/>

            <label
            className="form-label">Company name : </label>
            <input
             onChange = { this.updateCompany }
             value = { this.state.companyName }
            className="form-control" type="text" /> 

            <label className="form-label">worked from : </label>
            <input 
            onChange = { this.updateFrom }
            value = { this.state.from }
            className="form-control" type="date" /> 

            <label>to : </label>
            <input 
            onChange = { this.updateTo }
            value = { this.state.to || this.state.from }
            className="form-control" type="date" /> 

            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                className="btn btn-success mt-2 " >
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
