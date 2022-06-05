import React from "react";
import styled from "styled-components";

interface main {
  children?: React.ReactNode;
}

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
`;

export const Main_UI: React.FunctionComponent<main> = ({ children }) => {
  return <Main>{children}</Main>;
};
