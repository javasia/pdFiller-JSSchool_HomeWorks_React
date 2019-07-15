import React from "react";
import withPortals from "HOC/withPortals";
import withTimers from "HOC/withTimers";

const domElem = document.querySelector(".alerts-list");

function Alert(props) {
  return (
    <div className='alert'>
      {props.text}
    </div>
  );
}

export default withTimers(3000)(withPortals(domElem)(Alert));