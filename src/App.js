import React, { Component } from "react";
import Counter from "./state/Counter";
import Split from "./composition/Split";
import Tooltip from "./composition/Tooltip";

export default class App extends Component {
  render() {
    // make 2 tooltips here and another inside the App directly
    const firstTooltip = (
      <Tooltip color="hotpink" message="tooltip message">
        ipsum
      </Tooltip>
    );
    const secondTooltip = (
      <Tooltip color="#126BCC" message="another tooltip message">
        officiis
      </Tooltip>
    );
    return (
      <main>
        <Split className="left" flexBasis={2}>
          This is the content for the left `Split`. Lorem {firstTooltip} ipsum
          dolor sit amet consectetur, adipisicing elit. Incidunt ex velit
          suscipit facere officia?
          <Tooltip message="one more tooltip message">Necessitatibus?</Tooltip>
        </Split>
        <Split className="right">
          This is the content for the left `Split`. Lorem {secondTooltip} ipsum
          dolor sit amet consectetur, adipisicing elit. Incidunt ex velit
          suscipit facere officia?
        </Split>
      </main>
    );
  }
}
