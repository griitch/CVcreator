/* eslint-disable react/prop-types */
import { Component } from "react";
import Navbar from "./Navbar";
import React from "react";
import MainContent from './MainContent';

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
