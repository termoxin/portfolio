import React, { Component } from "react";
import styled from "styled-components";
import { Button, Menu, MenuItem } from "@blueprintjs/core";
import { Column, Table, Cell, EditableCell } from "@blueprintjs/table";
import ModalCreate from "./Modals/Create";

const ProjectsWrapper = styled.div``;
const StyledButton = styled(Button)`
  margin: 0 10px 0 10px;
`;

class Projects extends Component {
  renderBodyContextMenu = context => {
    const { projects, handleDelete } = this.props;
    const row = context.target.rows[0];
    const project = projects[row].name;

    return (
      <Menu>
        <MenuItem
          text="Delete"
          context={context}
          onClick={() => handleDelete(project)}
        />
      </Menu>
    );
  };

  componentWillUnmount() {
    const { handleDelete } = this.props;

    window.removeEventListener("click", handleDelete, false);
    window.removeEventListener("oncontextmenu", this.renderContextMenu, false);
  }

  render() {
    const {
      projects,
      loading,
      handleClose,
      handleOpen,
      isOpen,
      handleCellChange,
      handleChange,
      handleSubmit,
      handleSave
    } = this.props;

    const cellDescription = (rowIndex, columnIndex) => {
      const description = projects[rowIndex].description;
      return (
        <EditableCell
          rowIndex={rowIndex}
          value={description}
          columnIndex={columnIndex}
          onChange={handleCellChange}
        />
      );
    };

    const cellImage = (rowIndex, columnIndex) => {
      const image = projects[rowIndex].image;
      return (
        <EditableCell
          rowIndex={rowIndex}
          value={image}
          columnIndex={columnIndex}
          onChange={handleCellChange}
        />
      );
    };

    const cellSrc = (rowIndex, columnIndex) => {
      const src = projects[rowIndex].source;
      return (
        <EditableCell
          rowIndex={rowIndex}
          value={src}
          columnIndex={columnIndex}
          onChange={handleCellChange}
        />
      );
    };

    const cellCode = (rowIndex, columnIndex) => {
      const code = projects[rowIndex].code;
      return (
        <EditableCell
          value={code}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          onChange={handleCellChange}
        />
      );
    };

    const cellType = (rowIndex, columnIndex) => {
      const type = projects[rowIndex].type;
      return (
        <EditableCell
          value={type}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          onChange={handleCellChange}
        />
      );
    };

    const cellName = (rowIndex, columnIndex) => {
      const name = projects[rowIndex].name;
      return (
        <Cell
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          onContextMenu={this.renderContextMenu}
        >
          {name}
        </Cell>
      );
    };

    return (
      <ProjectsWrapper>
        <Table
          bodyContextMenuRenderer={this.renderBodyContextMenu}
          numRows={projects ? projects.length : 0}
        >
          <Column name="Name" cellRenderer={cellName} />
          <Column name="Description" cellRenderer={cellDescription} />
          <Column name="Image" cellRenderer={cellImage} />
          <Column name="Source" cellRenderer={cellSrc} />
          <Column name="Type" cellRenderer={cellType} />
          <Column name="Code" cellRenderer={cellCode} />
        </Table>

        <ModalCreate
          handleClose={handleClose}
          isOpen={isOpen}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Button
          icon="plus"
          intent="success"
          onClick={handleOpen}
          loading={loading}
        >
          Create
        </Button>
        <StyledButton icon="floppy-disk" onClick={handleSave} loading={loading}>
          Save
        </StyledButton>
      </ProjectsWrapper>
    );
  }
}

export default Projects;
