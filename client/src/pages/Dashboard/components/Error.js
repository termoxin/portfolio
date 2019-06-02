import React from "react";
import styled from "styled-components";
import { Card } from "@blueprintjs/core";

const Error = styled(Card)`
  && {
    min-width: 200px;
    max-width: 320px;
    height: 40px;
    padding: 5px;
    font-weight: 700;
    margin-top: 20px;
    align-items: center;
    display: flex;
    color: red;
  }
`;

export default ({ error }) => {
  if (!error) return "";

  return <Error>{error.error}</Error>;
};
