import React, { Component } from "react";
import styled from "styled-components";
import { Dialog, Classes, FormGroup } from "@blueprintjs/core";

const DialogBody = styled.div`
  input,
  button {
    margin-top: 10px;
  }
`;

class Modal extends Component {
  render() {
    const { isOpen, children } = this.props;

    return (
      <Dialog isOpen={isOpen} canOutsideClickClose={true}>
        <DialogBody className={Classes.DIALOG_BODY}>
          <FormGroup>{children}</FormGroup>
        </DialogBody>
      </Dialog>
    );
  }
}

export default Modal;
