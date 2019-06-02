import React, { Component } from "react";
import { Button, InputGroup } from "@blueprintjs/core";
import styled from "styled-components";
import Modal from "./Modal";

const ButtonClose = styled(Button)`
  margin-left: 10px;
`;

class Create extends Component {
  render() {
    const { isOpen, handleClose, handleChange, handleSubmit } = this.props;

    return (
      <Modal isOpen={isOpen}>
        <InputGroup placeholder="Name" name="name" onChange={handleChange} />
        <InputGroup
          placeholder="Description"
          name="description"
          onChange={handleChange}
        />
        <InputGroup placeholder="Type" name="type" onChange={handleChange} />
        <InputGroup placeholder="Image" name="image" onChange={handleChange} />
        <InputGroup
          placeholder="Source"
          name="source"
          onChange={handleChange}
        />
        <Button intent="success" onClick={handleSubmit}>
          Create
        </Button>
        <ButtonClose onClick={handleClose}>Close</ButtonClose>
      </Modal>
    );
  }
}

export default Create;
