import styled from "styled-components";

export const StyledSearch = styled.input`
  padding: 15px 20px;
  line-height: 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;

  &::placeholder {
    color: #999999;
  }

  &:focus-visible {
    outline: none;
  }

  &::-ms-clear {
    display: none;
  }
`;
