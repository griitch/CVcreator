/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
import React from "react";
import MainContent from './MainContent';
//import MainContent from './tempo';


export function capitalize( str ) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default function App() {
    return (
      <div >
          <Navbar />
          <MainContent />
      </div>
    );
  }

