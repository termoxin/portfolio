import React from "react";
import styled from "styled-components";
import GithubCircleIcon from "mdi-react/GithubCircleIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import TelegramIcon from "mdi-react/TelegramIcon";

import { Link } from "react-router-dom";

const Github = styled(GithubCircleIcon)`
  fill: #fff;
  width: 40px;
  height: auto;
`;

const Instagram = styled(InstagramIcon)`
  fill: #fff;
  width: 40px;
  height: auto;
`;

const Telegram = styled(TelegramIcon)`
  fill: #fff;
  width: 40px;
  height: auto;
`;

const StyledLink = styled(Link)`
  color: white;

  &:hover {
    color: white;
    text-decoration: none;
  }
`;

const Icon = styled.div`
  cursor: pointer;
  background: #262f38;
  padding: 10px;
  transition: 0.3s all;

  &:hover {
    opacity: 0.8;
  }
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #1b242f;
  height: 200px;
`;

const LinkToSocial = styled.a``;

const SocialIcons = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Copyright = styled.p`
  font-size: 14px;
  font-family: "Raleway" sans-serif;
  margin-top: 50px;
  color: #fff;
  font-weight: 700;
`;

const blank = "true";

export default () => (
  <Footer>
    <SocialIcons>
      <Icon>
        <LinkToSocial href="https://github.com/termoxin" target="__blank">
          <Github />
        </LinkToSocial>
      </Icon>
      <Icon>
        <LinkToSocial
          href="https://instagram.com/rostislav.futornoy/"
          target="__blank"
        >
          <Instagram />
        </LinkToSocial>
      </Icon>
      <Icon>
        <LinkToSocial href="https://t.me/termoxin" target="__blank">
          <Telegram />
        </LinkToSocial>
      </Icon>
    </SocialIcons>
    <Copyright>
      <StyledLink to="/auth">
        Rostislav Futornoy {new Date().getFullYear()}
      </StyledLink>
    </Copyright>
  </Footer>
);
