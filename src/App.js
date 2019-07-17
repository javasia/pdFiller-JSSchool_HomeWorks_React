import React from "react";
import Alert from "components/Alert";
import withPortals from "HOC/withPortals";
import withTimers from "HOC/withTimers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = this.initialState;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.purgeAlertsCallBack = this.deleteAlertFromState.bind(this);
  }

  initialState = {
    alertText: "",
    alerts: new Map()
  };

  componentDidMount() {
    this.setFocusOnInput();
  }
  setFocusOnInput() {
    this.inputRef.current.focus();
  }
  handleInputChange(event) {
    this.setState({
      alertText: event.target.value
    });
  }
  handleButtonClick() {
    this.addAlert();
    this.inputRef.current.focus();
  }
  addAlert = () => {
    const alertId = this.state.alerts.size;
    this.setState({
      ...this.initialState,
      alerts: new Map(this.state.alerts).set(alertId, {
        key: alertId,
        text: this.state.alertText
      })
    });
  };
  deleteAlertFromState(key) {
    return () => {
      const alerts = new Map(this.state.alerts);
      alerts.delete(key);
      this.setState({ alerts });
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="alert-input">Alerts App</h1>
        <input
          onChange={this.handleInputChange}
          value={this.state.alertText}
          type="text"
          ref={this.inputRef}
        />
        <button
          onClick={this.handleButtonClick}
          className="alert-button"
          disabled={!this.state.alertText}
        >
          Add alert
        </button>
        {[...this.state.alerts.values()].map(alert => {
          const { key, text } = alert;
          const domElem = document.querySelector(".alerts-list");
          const WrappedAlert = withTimers(1000, this.deleteAlertFromState(key))(
            withPortals(domElem)(Alert)
          );
          return <WrappedAlert key={key} text={text} />;
        })}
      </div>
    );
  }
}

export default App;
