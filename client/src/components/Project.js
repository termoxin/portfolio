import React, { Component } from "react";
import styled from "styled-components";

const Project = styled.div`
  margin: 50px 20px 0 20px;
  width: 40%;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  height: 300px;
  width: 100%;
  background: #252934;
  transition: 0.7s transform;
  transform-style: preserve-3d;
  transform: ${props =>
    props.side === "front" ? "rotateY(0)" : "rotateY(180deg)"};
`;

const Side = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Front = styled(Side)`
  background-image: ${props => (props.image ? `url(${props.image});` : "")};
  backface-visibility: hidden;
  background-size: cover;
  background-position: center center;
`;

const Name = styled.h2`
  a {
    color: #fff;

    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const Description = styled.p``;

const Back = styled(Side)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

class ProjectComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      side: "front"
    };
  }

  handleMouseEnter = () => {
    this.setState({
      side: "back"
    });
  };

  handleMouseLeave = () => {
    this.setState({
      side: "front"
    });
  };

  render() {
    const { side } = this.state;
    const { name, back, image, source } = this.props;

    return (
      <Project
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <ProjectWrapper side={side}>
          <Front image={image} />
          <Back>
            <Name>
              <a href={source} alt={name} __blank={"true"}>
                {name}
              </a>
            </Name>
            <Description>{back}</Description>
          </Back>
        </ProjectWrapper>
      </Project>
    );
  }
}

export default ProjectComponent;
