import React, { useState } from "react";
import styled, { css } from "styled-components";
import design from "../../../utils";
import { componentProps } from "../../../models/header.module";
import { keyframes } from "styled-components";

interface props {
  isOpen: boolean;
  background: string;
  font: string;
  color: string;
}

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;

const Img = styled.img``;

const Img_Hamburguer = styled.img`
  @media (min-width: 700px) {
    display: none;
  }
`;

const Div = styled.div<Omit<props, "font" | "color">>`
  background: ${(props) => props.background};
  width: 100%;
  position: absolute;
  bottom: -290px;
  z-index: ${(props) => (props.isOpen ? 100 : -1)};
  padding: 4rem 2rem 2rem;
  clip-path: polygon(
    0 100%,
    100% 100%,
    100% 55%,
    100% 0,
    91% 10%,
    51% 10%,
    0 10%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
    `}

  @media (min-width: 700px) {
    clip-path: none;
    position: static;
    opacity: 1;
    background: transparent;
    padding: 0;
  }
`;

const Ul = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;

const Li = styled.li<Pick<props, "font" | "color">>`
  font-family: ${(props) => props.font};
  text-align: center;
  color: ${(props) => props.color};

  @media (min-width: 700px) {
    color: white;
  }
`;

const LI_Button = styled.li`
  text-align: center;
`;

const Button = styled.button<Pick<props, "font" | "color">>`
  font-family: ${(props) => props.font};
  background: ${(props) => props.color};
  margin: 0 auto;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1rem;
  border: none;
  text-align: center;

  @media (min-width: 700px) {
    background: white;
  }
`;

export const Navbar: React.FunctionComponent<componentProps> = ({
  handleClick,
  isOpen,
}) => {
  return (
    <NavBar>
      <Img src={design.images.icons.icon_logo} alt="logo" />
      <Img_Hamburguer
        onClick={handleClick}
        src={design.images.icons.icon_hamburguer}
        alt="hamburguer menu"
      />
      <Div isOpen={isOpen} background={design.colors.neutral.White}>
        <Ul>
          {["About", "Services", "Proyects"].map((value) => (
            <Li
              key={value}
              font={design.typography.barlow}
              color={design.colors.neutral["Very-dark-grayish-blue"]}
            >
              {value}
            </Li>
          ))}
          <LI_Button>
            <Button
              font={design.typography.fraunces}
              color={design.colors.primary.Yellow}
            >
              Contact
            </Button>
          </LI_Button>
        </Ul>
      </Div>
    </NavBar>
  );
};
