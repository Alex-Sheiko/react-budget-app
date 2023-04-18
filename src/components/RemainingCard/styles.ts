import styled from "styled-components";

interface ColorProps {
  $isOverSpend: boolean;
}

export const StyledRemainingCard = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background-color: ${(color: ColorProps) => (color.$isOverSpend ? "#FF0000" : "#CCD5FF")};
  color: ${(color: ColorProps) => (color.$isOverSpend ? "#ffffff" : "000000")};
  border-radius: 10px;
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
`;
