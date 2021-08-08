/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";
import '../styles/MainContent.css';

export default class FormsContainer extends Component {

    constructor( props ) {
        super(props);
        this.state = {
            isActive : false,
            degree : '',
            from: '',
            date: ''
        };
        this.toggleFormActive = this.toggleFormActive.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.updateDegree = this.updateDegree.bind(this);
        this.updateFrom = this.updateFrom.bind(this);
        this.updateDate = this.updateDate.bind(this);

    }

    toggleFormActive() {
        this.setState( prevState => {
            return { isActive : !prevState.isActive }
        })
    }

    addEducation( e ) {
        e.preventDefault();
        const { degree, from, date } = this.state;
        this.props.onEducationAdd( { degree, from, date } );
    }

    updateDegree(e){
        this.setState({
            degree : e.target.value
        });
    }

    updateFrom(e){
        this.setState({
            from : e.target.value
        })
    }

    updateDate(e){
        this.setState({
            date : e.target.value
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
            <form onSubmit = { this.addEducation }>
                <fieldset>
                <legend>Enter information about the degree</legend>
                <label className ="form-label" >degree : </label>
                <input 
                value = { this.state.degree }
                onChange = { this.updateDegree }
                required className="form-control" type="text"  /> <br />

                <label className ="form-label" >issued from : </label>
                <input
                value = { this.state.from }
                onChange = { this.updateFrom }
                required className="form-control" type="text"  /> <br />

                <label className ="form-label">date of graduation : </label>
                <input
                value = { this.state.date }
                onChange = { this.updateDate }
                required className="form-control" type="date" /> <br />
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button 
                    type = "submit"
                    className = 'btn btn-success '>save</button>

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
