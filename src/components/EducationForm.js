/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";
import '../styles/MainContent.css';

export default class FormsContainer extends Component {

    constructor( props ) {
        super(props);
        this.state = { isActive : false };
        this.toggleFormActive = this.toggleFormActive.bind(this);

    }

    toggleFormActive() {
        this.setState( prevState => {
            return { isActive : !prevState.isActive }
        })
    }


  render() {
    return (
        <div>
         { !this.state.isActive && <button
         className = "btn btn-outline-primary mb-2" 
         onClick={this.toggleFormActive} >add education</button> }   
        {
            this.state.isActive &&
            <form>
                <fieldset>
                <legend>Enter information about the degree</legend>
                <label className ="form-label" >degree : </label>
                <input className="form-control" type="text"  /> <br />

                <label className ="form-label" >issued from : </label>
                <input className="form-control" type="text"  /> <br />

                <label className ="form-label">date of graduation : </label>
                <input className="form-control" type="date" /> <br />
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button 
                    className = 'btn btn-success '
                    onClick={this.toggleFormActive}>save</button>
                    <button 
                    onClick={this.toggleFormActive}
                    className = 'btn btn-danger'
                    >discard</button>
                </div>
                </fieldset>
                <hr />
            </form>
        }
        </div>
    );
  }
}
