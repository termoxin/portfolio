import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Auth from "../containers/AuthContainer";
import Index from "../pages/Dashboard/containers/IndexContainer";

const App = styled.div`
  height: 100%;
  width: 100%;
`;

class AppComponent extends Component {
  render() {
    return (
      <App>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/auth" component={Auth} />
            <Route component={Index} />
          </Switch>
        </Router>
      </App>
    );
  }
}

export default AppComponent;
