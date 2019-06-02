import React, { Component } from "react";
import { connect } from "react-redux";
import Messages from "../components/Messages";
import { getMessages, deleteMessage, updateMessage } from "../actions";

class MessagesContainer extends Component {
  componentDidMount() {
    const { messages, getMessages } = this.props;

    if (!messages) {
      getMessages();
    }
  }

  handleDelete = id => {
    const { deleteMessage, getMessages, loading } = this.props;

    deleteMessage(id);

    if (!loading) {
      getMessages();
    }
  };

  handleUpdate = id => {
    const { updateMessage, getMessages, loading } = this.props;

    updateMessage(id);

    if (!loading) {
      getMessages();
    }
  };

  render() {
    const { messages, loading } = this.props;

    return (
      <Messages
        messages={messages}
        loading={loading}
        handleDelete={this.handleDelete}
        handleUpdate={this.handleUpdate}
      />
    );
  }
}

const mapStateToProps = state => ({
  messages: state.dashboard.messages,
  loading: state.dashboard.loading
});

const mapDispatchToProps = {
  getMessages,
  deleteMessage,
  updateMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesContainer);
