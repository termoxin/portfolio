import React from "react";
import styled from "styled-components";
import Project from "./Project";

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Projects = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  perspective: 10em;
  width: 100%;
  perspective: 60em;
`;

const Filter = styled.div`
  display: flex;
  width: 90%;
  font-family: "Raleway", sans-serif;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  cursor: pointer;
  background: #f57000;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  color: #fff;
  min-width: 25%;
  max-width: 100%;
  height: 60px;
  margin-top: 50px;
  font-size: 18px;
  border: 2px solid #fff;
  transition: 0.5s all;

  &:hover {
    background: #04c2c9;
    transition: 0.5s all;
    border-color: #04c2c9;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const ProjectsComponent = ({ projects, loading, applyFilter }) => (
  <ProjectsWrapper>
    <Filter>
      <Button onClick={() => applyFilter("")}>All</Button>
      <Button onClick={() => applyFilter("nodejs")}>Node.js</Button>
      <Button onClick={() => applyFilter("js")}>JavaScript</Button>
      <Button onClick={() => applyFilter("react")}>React</Button>
    </Filter>
    {loading || !projects ? (
      "LOADING..."
    ) : (
      <Projects>
        {projects.map(
          ({ id, name, description, image, source, code }, index) => (
            <Project
              key={id}
              name={name}
              back={description}
              image={image}
              source={source}
              code={code}
            />
          )
        )}
      </Projects>
    )}
  </ProjectsWrapper>
);

export default ProjectsComponent;
