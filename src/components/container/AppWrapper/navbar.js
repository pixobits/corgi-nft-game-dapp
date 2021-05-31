import React, { Component } from "react";
import corgi from "../../../assets/corgi.jpeg";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={corgi}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            &nbsp; Corgi Tokens
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-muted">
                <span id="account">{this.props.account}</span>
              </small>
            </li>
          </ul>
        </nav>
        {this.props.body}
      </div>
    );
  }
}

export default Navbar;
