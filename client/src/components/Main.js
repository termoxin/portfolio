import React from "react";
import styled from "styled-components";
import Hello from "./Hello";
import About from "./About";
import Projects from "../containers/ProjectsContainer";
import Contact from "../containers/ContactContainer";
import Footer from "./Footer";

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

function Main() {
  return (
    <MainWrapper>
      <Hello />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </MainWrapper>
  );
}

export default Main;
