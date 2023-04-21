import { InputHTMLAttributes } from "react";
import { StyledSearch } from "./styles";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Search = (props: SearchProps) => {
  return <StyledSearch {...props} />;
};
