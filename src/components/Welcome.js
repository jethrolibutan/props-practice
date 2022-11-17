import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        {" "}
        Welcome {this.props.name} a.k.a. {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;

// When your class extends the component you don't have to pass in the props and instead
// you can use the this keyword to access props you assign it in the App.js file
// by going this.props.variableName!
