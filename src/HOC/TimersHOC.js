import React from "react";

class TimersHOC extends React.Component {
  state = {
    timer: null
  };
  
  componentDidMount() {
    this.setState({
      timer: setTimeout(this.props.deleteAlertOnParentCB, this.props.timeout)
    });
  }
  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }
  render() {
    return this.props.children;
  }
}

export default TimersHOC;
