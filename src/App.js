import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      surname: " ",
      name: " ",
      patronymic: " ",
    };

    this.handleSetSurname = this.handleSetSurname.bind(this);
    this.handleSetName = this.handleSetName.bind(this);
    this.handleSetPatronymic = this.handleSetPatronymic.bind(this);
  }

  handleSetSurname(e) {
    this.setState({ surname: e.target.value });
  }

  handleSetName(e) {
    this.setState({ name: e.target.value });
  }

  handleSetPatronymic(e) {
    this.setState({ patronymic: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="item">
          <input
            className="input"
            value={this.state.surname}
            onChange={this.handleSetSurname}
          />
          <input
            className="input"
            value={this.state.name}
            onChange={this.handleSetName}
          />
          <input
            className="input"
            value={this.state.patronymic}
            onChange={this.handleSetPatronymic}
          />
        </div>
        <div className="item">
          {this.state.surname} {this.state.name} {this.state.patronymic}
        </div>
      </div>
    );
  }
}

export default App;
