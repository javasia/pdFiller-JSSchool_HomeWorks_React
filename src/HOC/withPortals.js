import ReactDOM from "react-dom";
import React from "react";

const withPortals = domElem => Component => props => 
  ReactDOM.createPortal(<Component {...props} />, domElem);

export default withPortals;