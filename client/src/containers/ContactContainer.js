import React, { Component } from "react";
import { connect } from "react-redux";
import Contact from "../components/Contact";
import { sendMessage } from "../actions";

class ContactContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      isSent: false
    };
  }

  handleChange = (name, event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = () => {
    const { name, email, message } = this.state;
    const { sendMessage } = this.props;

    if (name.length >= 3 && email && message) {
      sendMessage({ name, email, message });

      this.setState({
        isSent: true,
        name: "",
        email: "",
        message: ""
      });
    }
  };

  render() {
    const { err } = this.props;
    const { isSent, name, email, message } = this.state;

    return (
      <Contact
        name={name}
        email={email}
        message={message}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        err={err}
        isSent={isSent}
      />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  err: state.auth.err
});

const mapDispatchToProps = {
  sendMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactContainer);
