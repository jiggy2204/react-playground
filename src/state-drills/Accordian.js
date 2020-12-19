import React, { Component } from "react";

class Accordian extends Component {
  static defaultProps = { section: [] };

  state = {
    currentSectionIndex: 0,
  };

  renderContent() {
    return this.props.section.map((sec, index) => (
      <li>
        <button onClick={() => this.handleButtonClick(index)}>
          {sec.title}
        </button>
        {this.handleButtonClick()}
      </li>
    ));
  }

  handleButtonClick(index) {
    const currentSection = this.props.section[this.state.currentSectionIndex];

    this.setState({
      currentSectionIndex: index,
    });

    if (currentSection !== this.state.currentSectionIndex) {
      return (
        <p>{this.props.section[this.state.currentSectionIndex].content}</p>
      );
    }
  }

  render() {
    return (
      <div>
        <ul>{!!this.props.section.length && this.renderContent()}</ul>
      </div>
    );
  }
}

export default Accordian;
