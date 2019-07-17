import React from "react";

class TimersHOC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null
    };
    this.handleTimeout = this.handleTimeout.bind(this);
  }
  componentDidMount() {
    this.setState({
      timer: setTimeout(this.handleTimeout, this.props.timeout)
    });
  }
  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }
  handleTimeout() {
    this.props.deleteAlertOnParentCB();
  }
  render() {
    return this.props.children;
  }
}

export default TimersHOC;
