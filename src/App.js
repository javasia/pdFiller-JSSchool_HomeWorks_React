import React from "react";
import Alert from "components/Alert";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = this.initialState;
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  initialState = {
    alertText: "",
    isButtonActive: false,
    alerts: []
  }

  componentDidMount() {
    this.setFocusOnInput();
  }
  setFocusOnInput() {
    this.inputRef.current.focus()
  };
  handleInputChange(event) {
    this.setState({
      alertText: event.target.value,
      isButtonActive: !!event.target.value,
    });
  }
  handleButtonClick() {
    const alerts = this.state.alerts.concat(
      <Alert
        key={Math.random()}
        text={this.state.alertText}
      />
    );
    this.setState({ 
      ...this.initialState,
      alerts,
    });
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div className="App">
        <h1 className="alert-input">
          Alerts App
        </h1>
        <input
          onChange={this.handleInputChange}
          value={this.state.alertText}
          type="text"
          ref={this.inputRef}
        />
        <button
          onClick={this.handleButtonClick}
          className="alert-button"
          disabled={!this.state.isButtonActive}
        >
          Add alert
        </button>

        {this.state.alerts}

      </div>
    );
  }
}

export default App;
