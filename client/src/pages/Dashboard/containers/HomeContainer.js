import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadAvatar, changePassword } from "../actions";
import Home from "../components/Home";

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ""
    };
  }

  render() {
    const { loading, upload, changePassword, user } = this.props;

    if (user && !loading) {
      return "Loading...";
    }

    return (
      <Home
        loading={loading}
        uploadAvatar={upload}
        changePassword={changePassword}
      />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.dashboard.loading,
  user: state.dashboard.user
});

const mapDispatchToProps = {
  upload: uploadAvatar,
  changePassword
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
