import React from "react";
import { StyledBudget, StyledBudgetBox, StyledBudgetControls } from "./styles";
import { Title } from "components";

export const Budget = () => {
  return (
    <StyledBudget>
      <StyledBudgetBox>
        <Title text="Budget App" />
        <Title text="Budget App2" />
      </StyledBudgetBox>
      <StyledBudgetControls>
        <Title text="Budget App3" />
        <Title text="Budget App4" />
        <Title text="Budget App5" />
      </StyledBudgetControls>
    </StyledBudget>
  );
};
