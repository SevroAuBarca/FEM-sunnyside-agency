import React from "react";
import styled from "styled-components";

interface header {
  children?: React.ReactNode;
}

const Head = styled.header`
  width: 100%;
  padding: 1.5rem;
  position: fixed;
  z-index: 100;
`;

export const Header_UI: React.FunctionComponent<header> = ({ children }) => {
  return <Head>{children}</Head>;
};
