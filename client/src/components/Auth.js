import React, { Component } from "react";
import styled from "styled-components";
import { Button, FormGroup, InputGroup, Card } from "@blueprintjs/core";

const ErrorStyled = styled(Card)`
  color: red;
  padding: 10px;
  justify-content: center;
  align-items: center;
  display: flex;

  p {
    margin: 0;
  }
`;

const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;

  input,
  button {
    margin-top: 10px;
    width: 100%;
  }
`;

class AuthComponent extends Component {
  render() {
    const { onChange, handleClick, err, loading } = this.props;

    const Error = () => (
      <ErrorStyled>
        <p>{err.error}</p>
      </ErrorStyled>
    );

    return (
      <AuthWrapper>
        <FormGroup>
          {err ? <Error /> : ""}
          <InputGroup
            placeholder="Username"
            onChange={e => onChange("username", e)}
          />
          <InputGroup
            placeholder="Password"
            onChange={e => onChange("password", e)}
          />
          <Button
            icon="log-in"
            intent="success"
            loading={loading}
            onClick={handleClick}
          >
            Login
          </Button>
        </FormGroup>
      </AuthWrapper>
    );
  }
}

export default AuthComponent;
