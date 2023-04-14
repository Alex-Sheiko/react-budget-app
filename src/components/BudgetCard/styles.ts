import styled from "styled-components";

export const StyledBudgetCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100px;
  background-color: #7cc6fe;
  border-radius: 10px;
  padding: 20px;
`;

export const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus-visible {
    outline: none;
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
`;

export const StyledButton = styled.button`
  min-width: 85px;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  padding: 9px 26px 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }

  &:disabled {
    &:hover {
      background-color: #fff;
      cursor: default;
    }
  }
`;

export const StyledText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
