import React from "react";

function Greet(props) {
  return (
    <div>
      Hi {props.name} A.K.A. {props.heroName}
      {props.children}
    </div>
  );
}

export default Greet;

// This function is passing in props you put into it in the App.js
// Then your using the props by going props.variableName
