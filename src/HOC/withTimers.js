import React from "react";

const withTimers = timeout => Component => {
  class WithTimersHOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showChild: true,
      }
      this.handleTimeout = this.handleTimeout.bind(this);
    }
    componentDidMount() {
      setTimeout(this.handleTimeout, timeout);
    }
    handleTimeout() {
      this.setState({showChild: false});
    }
    render() {
      return this.state.showChild && <Component {...this.props} />;
    }
  } 
  
  return WithTimersHOC;
}

export default withTimers;