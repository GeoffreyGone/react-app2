import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Tourlist from "./components/Tourlist/index";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Tourlist/>
      </React.Fragment>
    );
  }
}
