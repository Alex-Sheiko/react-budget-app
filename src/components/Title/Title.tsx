import React from "react";
import { StyledTitle } from "./styles";

interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return <StyledTitle>{text}</StyledTitle>;
};
