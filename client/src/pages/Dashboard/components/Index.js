import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomeContainer from "../containers/HomeContainer";
import ProjectsContainer from "../containers/ProjectsContainer";
import MessagesContainer from "../containers/MessagesContainer";
import Error from "./Error";

const IndexWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 40px;

  input,
  button {
    margin-top: 10px;
  }
`;

export default function({ errorDash, handleRefresh }) {
  return (
    <IndexWrapper>
      <Navbar handleRefresh={handleRefresh} />
      <Error error={errorDash} />
      <ContentWrapper>
        <Switch>
          <Route exact path="/messages" component={MessagesContainer} />
          <Route exact path="/dashboard" component={HomeContainer} />
          <Route exact path="/projects" component={ProjectsContainer} />
        </Switch>
      </ContentWrapper>
    </IndexWrapper>
  );
}
