import React from "react";
import styled from "styled-components";
import GithubCircleIcon from "mdi-react/GithubCircleIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import TelegramIcon from "mdi-react/TelegramIcon";

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

const Link = styled.a``;

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
        <Link href="https://github.com/termoxin" __blank={blank.toString()}>
          <Github />
        </Link>
      </Icon>
      <Icon>
        <Link
          href="https://instagram.com/rostislav.futornoy/"
          __blank={blank.toString()}
        >
          <Instagram />
        </Link>
      </Icon>
      <Icon>
        <Link href="https://t.me/termoxin" __blank={blank.toString()}>
          <Telegram />
        </Link>
      </Icon>
    </SocialIcons>
    <Copyright>Rostislav Futornoy {new Date().getFullYear()}</Copyright>
  </Footer>
);
