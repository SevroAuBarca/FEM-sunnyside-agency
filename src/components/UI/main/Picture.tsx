import React, { SourceHTMLAttributes } from "react";
import styled from "styled-components";

interface Props {
  img_Mobile: string;
  img_Desktop: string;
  children: React.ReactNode;
}

const Img = styled.img`
  position: absolute;
  width: 100%;
`;

export const Picture: React.FunctionComponent<Props> = ({
  img_Mobile,
  img_Desktop,
  children,
}) => {
  return (
    <div>
      <picture>
        <source srcSet={img_Desktop} media="(min-width: 600px)" />
        <source srcSet={img_Mobile} />

        <Img src={img_Mobile} alt="image" />
      </picture>
      {children}
    </div>
  );
};
