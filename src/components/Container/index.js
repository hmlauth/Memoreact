import React from "react";
import "./style.css";

// props 
function Container(props) {
  return <div className="container">{props.children}</div>;
}

export default Container;
