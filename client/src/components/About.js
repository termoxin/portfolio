import React from "react";
import styled from "styled-components";

const About = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  color: #444649;
  margin-top: 15px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding-right: 0;
  }
`;

const Info = styled.div`
  display: flex;
  padding: 0 70px 0 70px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 0 10px 0 10px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Description = styled.p`
  font-size: 20px;
  padding: 10px 10px 0 10px;
  margin-top: 70px;
  line-height:1.4;
  width: 75%;

  @media (max-width: 1024px) {
    width: 95%;
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
  margin-top: 100px;
  padding: 10px 20px 0 20px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;
const Header = styled.h1`
  text-align: center;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 10px 45px 0 45px;

  @media (max-width: 768px) {
   padding: 10px 20px 0 20px;
  }
`;

const Item = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  width: 45%;
  margin-top: 40px;
  padding-bottom: 5px;

  @media (max-width: 568px) {
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
    <Info>
      <div className="part">
        <div className="octo">
          <div className="octo1">
            <Photo src="public/img/avatar.jpg" />
          </div>
        </div>
      </div>

      <Description>
        I’m Rostislav, a 17 years old self-taught Front-end developer, from Ukraine.
I quickly started to love Javascript. I’ve been studying Front-end development
full time. Because we know the best way to learn is to practice. I always want
to learn more, do more, and be more. I’m hard working, super curious, passionate,
and also a fast learner!
      </Description>
    </Info>

    <Skills>
      <Header>Skills</Header>
      <List>
        <Item percentage={90}>HTML</Item>
        <Item percentage={75}>CSS</Item>
        <Item percentage={75}>JAVASCRIPT</Item>
        <Item percentage={75}>REACT, REDUX</Item>
        <Item percentage={70}>NODE.JS</Item>
        <Item percentage={75}>GIT, WEBPACK</Item>
      </List>
    </Skills>
  </About>
);
