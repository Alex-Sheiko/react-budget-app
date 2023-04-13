import { ChangeEvent } from "react";
import { StyledSearch } from "./styles";

interface SearchProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const Search = ({ value, onChange }: SearchProps) => {
  return <StyledSearch placeholder="Search ..." value={value} onChange={onChange} />;
};
