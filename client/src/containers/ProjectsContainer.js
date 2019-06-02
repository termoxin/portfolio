import React, { Component } from "react";
import { connect } from "react-redux";
import Projects from "../components/Projects";
import { getProjects } from "../pages/Dashboard/actions";

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: ""
    };
  }

  componentDidMount() {
    const { getProjects } = this.props;

    getProjects();
  }

  applyFilter = filter => {
    this.setState({
      filter
    });
  };

  renderItems = () => {
    const { filter } = this.state;
    const { projects } = this.props;

    if (!filter) return projects;

    return projects.filter(project => project.type === filter);
  };

  render() {
    const { loading } = this.props;
    const items = this.renderItems();

    return (
      <Projects
        loading={loading}
        projects={items}
        applyFilter={this.applyFilter}
      />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.dashboard.loading,
  projects: state.dashboard.projects
});

const mapDispatchToProps = {
  getProjects
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsContainer);
