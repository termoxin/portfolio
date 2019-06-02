import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Alignment,
  Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";

const ButtonStyled = styled(Button)`
  margin-left: 10px;
`;

class NavbarComponent extends Component {
  render() {
    const { handleRefresh } = this.props;

    return (
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Dashboard</NavbarHeading>
          <NavbarDivider />
          <Link to="/dashboard">
            <ButtonStyled icon="home" text="Home" />
          </Link>
          <Link to="/projects">
            <ButtonStyled icon="projects" text="Projects" />
          </Link>
          <Link to="/messages">
            <ButtonStyled icon="inbox" text="Messages" />
          </Link>
          <ButtonStyled
            icon="refresh"
            intent="primary"
            onClick={handleRefresh}
          />
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default NavbarComponent;
