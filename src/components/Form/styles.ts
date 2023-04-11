import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;

const StyledFormControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledInputForm = styled.input`
  padding: 15px 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  &::placeholder {
    color: #999999;
    font-weight: 400;
  }

  &:focus-visible {
    outline: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 390px) {
    font-size: 12px;
    padding: 13px 10px;
  }
`;

export { StyledForm, StyledInputForm, StyledFormControls };
