import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const About = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #444649;
  margin-top: 15px;
  padding-right: 14%;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding-right: 0;
  }
`;

const Photo = styled.img`
  height: auto;
  display: block;
  background-size: cover;
  width: 400px;
  margin: 0 10px 0 10px;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

const Skills = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 40%;
  margin: 0 10px 0 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 40px;
  }
`;
const Header = styled.h1``;

const List = styled.ul`
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  cursor: pointer;
  width: 180%;
  margin-top: 40px;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 420px) {
    width: 100%;
  }

  &:hover {
    &:after {
      width: ${props => (props.percentage ? props.percentage + "%" : "100%")};
      transition: 0.5s all;
    }
  }

  &:after {
     display: block;
    content: "";
    width: 0;
    position: relative;
    top: 3px;
    height: 3px;
    z-index: 999;
    transition: 0.5s all;
    background: #04c2c9;
  }

  &:before {
    display: block;
    content: "";
    position: relative;
    top: 36px;
    background: black;
    height: 3px;
    width: 100%;
  }
`;

export default () => (
  <About>
    <div className="part">
      <div className="octo">
        <div className="octo1">
          <Link to="/auth"><Photo src="public/img/avatar.jpg" /></Link>
        </div>
      </div>
    </div>
    <Skills>
      <Header>Skills</Header>
      <List>
        <Item percentage={90}>HTML</Item>
        <Item percentage={70}>CSS</Item>
        <Item percentage={70}>JAVASCRIPT</Item>
        <Item percentage={50}>REACT, REDUX</Item>
        <Item percentage={50}>NODE.JS</Item>
        <Item percentage={20}>GIT, WEBPACK</Item>
      </List>
    </Skills>
  </About>
);
