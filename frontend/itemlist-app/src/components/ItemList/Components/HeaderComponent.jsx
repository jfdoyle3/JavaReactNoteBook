import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import AuthenticationService from "../AuthenticationService.js";

class HeaderComponent extends Component {
  render() {
    // const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    // console.log(isUserLoggedIn);

    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a
              href="https://github.com/jfdoyle3/JavaReactNoteBook"
              className="navbar-brand"
            >
              Java/React App
            </a>
          </div>
          {/* {isUserLoggedIn && ()} in front of the LI */}
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/welcome/user">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/itemlist">
                Item List
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-collapse  justify-content-end">
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/logout"
                onClick={AuthenticationService.logout}
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default HeaderComponent;
