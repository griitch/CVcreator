/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";

export default class BasicInfoDisplay extends Component {

    render() {

        return (
            <div className = 'col-6 mb-2'>
                <h4>Personnal information :</h4>
                Email : { this.props.info.email} <br />
                phone : { this.props.info.phone } <br/>
                Address : { this.props.info.address }
            </div>
        )
    }

}