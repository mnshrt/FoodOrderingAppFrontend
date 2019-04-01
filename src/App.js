// imports
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./common/header/Header";
import Checkout from "./screens/checkout/Checkout";
import Details2 from "./screens/details/Detalis2";
import Home2 from "./screens/home/Home2";
import Profile from "./screens/Profile/Profile";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home2} />
            <Route exact path="/details" component={Details2} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// export
export default App;
