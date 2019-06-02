import React from "react";
import styled from "styled-components";

const Contact = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding-bottom: 100px;
  background: #252934;
  height: 500px;
`;

const ContactForm = styled.form`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Input = styled.input`
  margin-top: 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: 0;
  padding: 10px 15px;
  background: #1e242c;
  font-size: 15px;
  color: #fff;
`;

const Textarea = styled.textarea`
  margin-top: 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: 0;
  min-height: 120px;
  max-height: 250px;
  padding: 10px 15px;
  background: #1e242c;
  font-size: 15px;
  color: #fff;
`;

const SubmitButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Raleway", sans-serif;
  color: #fff;
  width: 150px;
  height: 50px;
  margin-top: 50px;
  font-size: 18px;
  background: transparent;
  border: 2px solid #fff;
  transition: 0.5s all;

  &:hover {
    background: #04c2c9;
    border-color: #04c2c9;
  }
`;

const Header = styled.h1`
  color: #fff;
  position: relative;
  top: 80px;
`;

const Question = styled.p`
  font-weight: 600;
  color: #04c2c9;
  margin: 80px 20px 0 20px;
  text-align: center;
`;

const SuccessMessage = styled.p`
  font-size: 15px;
  color: #10cc10;
  position: relative;
  top: 50px;
`;


export default ({ handleChange, handleSubmit, err, isSent, message, email, name }) => {
  const showStatus = () => {
    return isSent && !err ? (
      <SuccessMessage>
        Your message was sent. Wait for an answer...
      </SuccessMessage>
    ) : (
      ""
    );
  };


  return (
    <Contact>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="100"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white" />
      </svg>
      <Header>Contact</Header>
      <Question>Have you a question or want to work together?</Question>
      {showStatus()}
      <ContactForm onSubmit={e => e.preventDefault()}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => handleChange("name", e)}
        />
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => handleChange("email", e)}
        />
        <Textarea
          placeholder="Message"
          value={message}
          onChange={e => handleChange("message", e)}
        />
        <SubmitButton onClick={handleSubmit}>Send</SubmitButton>
      </ContactForm>
    </Contact>
  );
};
