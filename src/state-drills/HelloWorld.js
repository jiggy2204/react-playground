import React, { Component } from "react";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      who: "world",
    };
  }

  handleButtonClick = (e) => {
    //var whoName = this.id.charAt(0).toUpperCase() + this.id.slice(1);

    var whoName = e.target.id;
    console.log(whoName, "clicked");
    this.setState({
      who: whoName,
    });
  };

  render() {
    return (
      <div>
        <p>"Hello {this.state.who}!"</p>

        <button id="world" onClick={() => this.setState({ who: "world" })}>
          World
        </button>
        <br />
        <button id="friend" onClick={() => this.setState({ who: "friend" })}>
          Friend
        </button>
        <br />
        <button id="React" onClick={() => this.setState({ who: "React" })}>
          React
        </button>
      </div>
    );
  }
}

export default HelloWorld;
