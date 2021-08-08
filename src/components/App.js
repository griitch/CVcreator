/* eslint-disable react/prop-types */
import { Component } from "react";
import Navbar from "./Navbar";
import React from "react";
import MainContent from './MainContent';


export function capitalize( str ) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default class App extends Component {
  render() {
    return (
      <div >
          <Navbar />
          <MainContent />
      </div>
    );
  }
}
