/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";
import FormsContainer from "./FormsContainer";
import Preview from "./Preview";
import "../styles/MainContent.css";

export default class MainContent extends Component {



    render() {
        return (
            <div className = ' mt-5 container' >
                <div className="row">
                    <FormsContainer   />
                    <Preview  />
                </div>
            </div>
        );
    }
}