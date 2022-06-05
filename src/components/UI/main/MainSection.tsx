import React from "react";
import styled from "styled-components";
import { Picture } from "./Picture";
import design from "../../../utils";

const Section = styled.section`
  position: relative;
  width: 100%;
`;

export const MainSection = () => {
  return (
    <Section>
      <Picture
        img_Mobile={design.images.mobile.orange_header}
        img_Desktop={design.images.desktop.orange_header}
      ></Picture>
    </Section>
  );
};
