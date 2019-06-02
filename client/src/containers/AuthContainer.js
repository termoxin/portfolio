import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authAdmin } from "../actions";
import AuthComponent from "../components/Auth";

class AuthContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleOnClick = () => {
    const { authAdmin } = this.props;
    const { username, password } = this.state;

    authAdmin({ username, password });
  };

  handleOnChange = (name, e) => {
    this.setState({ [name]: e.target.value.trim() });
  };

  render() {
    const { loading, user, err } = this.props;

    if (!loading && user && user.hasOwnProperty("isAdmin")) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <AuthComponent
        onChange={this.handleOnChange}
        handleClick={this.handleOnClick}
        loading={loading}
        err={err}
      />
    );
  }
}

const mapDispatchToProps = {
  authAdmin
};

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
  err: state.auth.err
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthContainer)
);
