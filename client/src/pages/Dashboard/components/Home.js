import React, { Component } from "react";
import styled from "styled-components";
import { Button, InputGroup, FileInput } from "@blueprintjs/core";
import { getItem } from "../../../helpers/localStorage";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;

  button,
  input {
    margin: 10px 0 10px 0;
  }
`;

const HomeWrapper = styled.div``;

const Avatar = styled.img`
  height: auto;
  width: 300px;
`;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null,
      password: ""
    };
  }
  handleChange = e => {
    if (e.target.type === "file" && e.target.files[0]) {
      this.setState({
        file: e.target.files[0]
      });
    } else {
      this.setState({
        password: e.target.value
      });
    }
  };

  handleSubmit = () => {
    const { file, password } = this.state;
    const { uploadAvatar, changePassword } = this.props;
    const { id, username } = getItem("token");

    if (password) {
      changePassword({ username, password, id });
    }

    if (file) {
      let data = new FormData();

      data.append("file", file);
      uploadAvatar(data);
    }
  };

  render() {
    const { loading } = this.props;
    const { file } = this.state;
    const avatar_link = "/public/img/avatar.jpg";

    return (
      <HomeWrapper>
        <Avatar src={avatar_link} />
        <Form enctype="multipart/form-data">
          <InputGroup
            placeholder="Enter your new password..."
            onChange={this.handleChange}
          />

          <FileInput
            name="file"
            text={file ? file.name : "Choose photo..."}
            onInputChange={this.handleChange}
          />
          <Button
            icon="edit"
            intent="success"
            loading={loading}
            onClick={this.handleSubmit}
          >
            Ok
          </Button>
        </Form>
      </HomeWrapper>
    );
  }
}

export default Home;
