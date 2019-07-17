import React from "react";
import TimersHOC from "./TimersHOC";

const withTimers = (timeout, deleteAlertOnParentCB) => Component => props => {
  return (
    <TimersHOC timeout={timeout} deleteAlertOnParentCB={deleteAlertOnParentCB}>
      <Component {...props} />
    </TimersHOC>
  );
};

export default withTimers;
