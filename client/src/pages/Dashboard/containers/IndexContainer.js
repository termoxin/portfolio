import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { identifyUser } from "../../../actions";
import { getMessages, getProjects } from "../actions";
import { withRouter } from "react-router-dom";
import Index from "../components/Index";
import throttle from "../../../helpers/throttle";

class IndexContainer extends Component {
  componentDidMount() {
    const { identifyUser } = this.props;

    identifyUser();
  }

  handleRefresh = throttle(() => {
    const { getProjects, getMessages } = this.props;

    getProjects();
    getMessages();
  }, 5000);

  render() {
    const { user, loading, errAuth, errDash } = this.props;

    if (loading) {
      return "Loading...";
    }

    if (errAuth) {
      return <Redirect to="/auth" />;
    }

    if (!loading || user) {
      return <Index errorDash={errDash} handleRefresh={this.handleRefresh} />;
    }
  }
}

const mapDispatchToProps = {
  identifyUser,
  getProjects,
  getMessages
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  user: state.auth.user,
  errAuth: state.auth.err,
  errDash: state.dashboard.err
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(IndexContainer)
);
