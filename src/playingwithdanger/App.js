import React, { Component } from "react";
import Currency from "./Currency";
import CurrencyError from "./CurrencyError";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Here are some currency values</h1>

        <CurrencyError>
          Germany: <Currency value={21} locale="de-DE" currency="US" />
        </CurrencyError>
        <CurrencyError>
          USA: <Currency value={21} locale="en-US" currency="USD" />
        </CurrencyError>
      </div>
    );
  }
}

export default App;
