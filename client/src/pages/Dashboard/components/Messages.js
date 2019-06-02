import React, { Component } from "react";
import styled from "styled-components";
import { Menu, MenuItem } from "@blueprintjs/core";
import { Column, Table, Cell } from "@blueprintjs/table";

const MessagesWrapper = styled.div``;

const StyledCell = styled(Cell)`
  opacity: 0.7;
  background: ${props => (props.status ? "green" : "red")};
`;

class Messages extends Component {
  renderBodyContextMenu = context => {
    const { messages, handleDelete, handleUpdate } = this.props;
    const row = context.target.rows[0];
    const messageId = messages[row].id;

    return (
      <Menu>
        <MenuItem
          text="Delete"
          context={context}
          onClick={() => handleDelete(messageId)}
        />
        <MenuItem
          text="Toggle status"
          context={context}
          onClick={() => handleUpdate(messageId)}
        />
      </Menu>
    );
  };

  componentWillUnmount() {
    const { handleDelete, handleUpdate } = this.props;

    window.removeEventListener("click", handleDelete, false);
    window.removeEventListener("click", handleUpdate, false);
    window.removeEventListener("oncontextmenu", this.renderContextMenu, false);
  }

  render() {
    const { messages, loading } = this.props;

    const cellName = rowIndex => {
      const name = messages[rowIndex].name;
      return <Cell>{name}</Cell>;
    };

    const cellMessage = rowIndex => {
      const message = messages[rowIndex].message;
      return <Cell>{message}</Cell>;
    };

    const cellEmail = rowIndex => {
      const email = messages[rowIndex].email;
      return <Cell>{email}</Cell>;
    };

    const cellStatus = rowIndex => {
      const status = messages[rowIndex].status;
      return <StyledCell status={status} />;
    };

    if (loading) {
      return "Loading...";
    }

    return (
      <MessagesWrapper>
        <Table
          numRows={messages ? messages.length : 0}
          bodyContextMenuRenderer={this.renderBodyContextMenu}
        >
          <Column name="Name" cellRenderer={cellName} />
          <Column name="Description" cellRenderer={cellMessage} />
          <Column name="Email" cellRenderer={cellEmail} />
          <Column name="Status" cellRenderer={cellStatus} />
        </Table>
      </MessagesWrapper>
    );
  }
}

export default Messages;
