import React, { Component } from "react";
import Web3 from "web3";
import "./App.css";
import AppWrapper from "./container/AppWrapper";
import CorgiToken from "../abis/CorgiToken.json";
import listcard from "../helper/cardArrays";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0x0",
      token: null,
      totalSupply: 0,
      tokenURIs: [],
      cardArray: [],
    };
  }
  async componentWillMount() {
    console.log("run");
    await this.loadWeb3();
    await this.loadBlockchainData();
    this.setState({
      cardArray: listcard.CARD_ARRAY.sort(() => 0.5 - Math.random()),
    });
  }
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = CorgiToken.networks[networkId];
    if (networkData) {
      const abi = CorgiToken.abi;
      const address = networkData.address;
      const token = new web3.eth.Contract(abi, address);
      this.setState({ token });
      const totalSupply = await token.methods.totalSupply().call();
      this.setState({ totalSupply });
      // load tokens
      let balanceOf = await token.methods.balanceOf(accounts[0]).call();
      for (let i = 0; i < balanceOf; i++) {
        let id = await token.methods.tokenOfOwnerByIndex(accounts[0], i).call();
        let tokenURI = await token.methods.tokenURI(id).call();
        this.setState({
          tokenURIs: [...this.state.tokenURIs, tokenURI],
        });
      }
    } else {
      alert("Smart contract not deployed to detected network");
    }
    console.log("account", networkId);
  }
  render() {
    return (
      <AppWrapper
        account={this.state.account}
        listCards={this.state.cardArray}
        token={this.state.token}
        tokenURIs={this.state.tokenURIs}
      />
    );
  }
}

export default App;
