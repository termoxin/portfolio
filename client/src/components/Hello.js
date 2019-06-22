import React, { Component } from "react";
import styled from "styled-components";

const HelloWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  background: #252934;
  height: 100%;
  width: 100%;
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  z-index: 999;
  box-shadow: 4px 5px 11px 3px #212121;
  justify-content: space-around;
  align-items: center;
  font-family: "Raleway", sans-serif;
  color: #fff;
  width: 200px;
  height: 60px;
  margin-top: 50px;
  font-size: 18px;
  background: transparent;
  border: 2px solid #fff;
  transition: 0.5s all;

  &:hover {
    background: #04c2c9;
    transition: 0.5s all;
    border-color: #04c2c9;
  }
`;

const Text = styled.div`
  font-size: 37px;
  text-align: center;

  @media (max-width: 565px) {
    font-size: 30px;
  }

  @media (max-width: 460px) {
    font-size: 24px;
  }
`;

const Name = styled.span`
  color: gold;
  font-weight: 700;
`;

const Arrow = styled.span`
  cursor: pointer;
  font-size: 24px;
  transition: 0.3s all;
  transform: ${props => (props.right ? "rotate(0deg)" : "rotate(90deg)")};
`;

export default class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      right: true
    };
  }

  handleMouseEnter = () => {
    this.setState({
      right: false
    });
  };

  handleMouseOut = () => {
    this.setState({
      right: true
    });
  };

  handleOnClick = () => {
    window.scrollTo(0, document.getElementById("hello").clientHeight);
  };

  render() {
    const { right } = this.state;

    return (
      <HelloWrapper id="hello">
        <canvas className="background" />
        <Text>
          <p>
            Hello, I'm <Name>Rostislav </Name>
          </p>
          <p>I'm a Front-end web developer. </p>
        </Text>
        <Button
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseOut}
          onClick={this.handleOnClick}
        >
          <span>View my work</span>
          <Arrow right={right}>→</Arrow>
        </Button>
      </HelloWrapper>
    );
  }
}
