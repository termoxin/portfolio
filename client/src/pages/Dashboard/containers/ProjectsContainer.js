import React, { Component } from "react";
import { connect } from "react-redux";
import Projects from "../components/Projects";
import {
  getProjects,
  createProject,
  deleteProject,
  updateProjects
} from "../actions";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import throttle from "../../../helpers/throttle";
import debounce from "../../../helpers/debounce";

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      dataToUpdate: [],
      username: "",
      description: "",
      type: "",
      image: "",
      source: ""
    };
  }

  componentDidMount() {
    const { getProjects, projects } = this.props;

    if (!projects) {
      getProjects();
    }
  }

  handleCellChange = debounce((value, rowIndex, columnIndex) => {
    const { projects } = this.props;
    const copyProjects = projects.slice();
    const prepareToUpdate = [];

    let row = copyProjects[rowIndex];
    const currentProperty = Object.keys(row)[columnIndex + 1];

    row[currentProperty] = value;

    prepareToUpdate.push(row);

    this.setState({
      dataToUpdate: [...prepareToUpdate, ...this.state.dataToUpdate]
    });
  }, 2000);

  handleSave = () => {
    const { updateProjects } = this.props;
    const { dataToUpdate } = this.state;

    if (dataToUpdate.length) {
      updateProjects(dataToUpdate);
    }
  };

  handleChange = async event => {
    const name = event.target.name;
    const value = event.target.value;

    const changeInput = AwesomeDebouncePromise((name, value) => {
      this.setState({
        [name]: value
      });
    }, 500);

    await changeInput(name, value);
  };

  handleOnClose = () => {
    this.setState({
      isOpen: false
    });
  };

  handleOnOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleSubmit = throttle(() => {
    const { name, description, type, image, source } = this.state;
    const { createProject, getProjects, loading } = this.props;

    if (name && description && type) {
      createProject({ name, description, type, image, source });
      this.handleOnClose();

      if (!loading) {
        getProjects();
      }
    }
  }, 5000);

  handleDelete = throttle(name => {
    const { deleteProject, getProjects, loading } = this.props;

    deleteProject({ name });

    if (!loading) {
      getProjects();
    }
  }, 3000);

  render() {
    const { loading, projects } = this.props;
    const { isOpen } = this.state;

    return (
      <Projects
        loading={loading}
        projects={projects}
        isOpen={isOpen}
        handleCellChange={this.handleCellChange}
        handleClose={this.handleOnClose}
        handleOpen={this.handleOnOpen}
        handleSave={this.handleSave}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleDelete={this.handleDelete}
      />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.dashboard.loading,
  projects: state.dashboard.projects
});

const mapDispatchToProps = {
  getProjects,
  createProject,
  deleteProject,
  updateProjects
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsContainer);
