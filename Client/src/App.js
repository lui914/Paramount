import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unknown: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}
