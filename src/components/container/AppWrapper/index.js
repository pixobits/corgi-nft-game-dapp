import React, { Component } from "react";
import Navbar from "./navbar";
import Body from "./body";

class App extends Component {
  render() {
    return (
      <Navbar
        account={this.props.account}
        body={
          <Body
            listCards={this.props.listCards}
            token={this.props.token}
            account={this.props.account}
            tokenURIs={this.props.tokenURIs}
          />
        }
      />
    );
  }
}

export default App;
