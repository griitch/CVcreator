/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";

export default class SkillsForm extends Component {

    constructor( props ) {
        super(props);
        this.toggleFormActive = this.toggleFormActive.bind(this);
        this.updateStateSkill = this.updateStateSkill.bind(this);
        this.addSkill = this.addSkill.bind(this);
        this.state = { isActive : false,
            skill : ''
        };

    }

    toggleFormActive() {
        this.setState( prevState => {
            return { isActive : !prevState.isActive,
                degree : '',
                from: '',
                date: ''
            }
        })
    }

    updateStateSkill( e ) {
        this.setState({
            skill : e.target.value 
       })
    }

    addSkill(e) {
        e.preventDefault();
        this.props.onSkillsAdd( this.state.skill );
    }

  render() {
    return (
        <div>
         { !this.state.isActive && <button 
         className = "btn btn-outline-primary mb-2" 
         onClick={this.toggleFormActive} >add Skill</button> }   
        {
            this.state.isActive &&
            <form onSubmit = { this.addSkill }>
                <fieldset>
                <legend> Enter the name of the skill :  </legend>
                <input required
                onChange = { this.updateStateSkill }
                value = { this.state.skill }
                className="form-control" type="text"  /> <br />
                <div className="d-grid gap-2 col-6 mx-auto">

                    <button 
                    className = 'btn btn-success '>
                    save</button>
                    
                    <button 
                    onClick={this.toggleFormActive}
                    className = 'btn btn-danger'>
                    discard</button>
                </div>
                </fieldset>
                <hr />
            </form>
        }
        </div>
    );
  }
}
