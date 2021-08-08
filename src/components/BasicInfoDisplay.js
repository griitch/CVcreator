/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";

export default class BasicInfoDisplay extends Component {

    render() {

        return (
            <div className = 'col-6 mb-2'>
                first name : { this.props.info.firstName} <br />
                lastname : { this.props.info.lastName } <br/>
                date of birth : { this.props.info.dateOfBirth } <br />
                address : { this.props.info.address }
            </div>
        )
    }

}