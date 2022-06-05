import React from "react";
import { Header_UI, Navbar } from "../UI/header/";
import { componentProps } from "../../models/header.module";

export const Header: React.FunctionComponent<componentProps> = ({
  handleClick,
  isOpen,
}) => {
  return (
    <Header_UI>
      <Navbar handleClick={handleClick} isOpen={isOpen} />
    </Header_UI>
  );
};
