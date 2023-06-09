import { useEffect, useState } from "react";
import { useBudgetContext, useCurrencyContext } from "context";
import { StyledBudgetCard, StyledButton, StyledInput, StyledText } from "./styles";
import { useDebounce, useInput, useToggle } from "hooks";

export const BudgetCard = () => {
  const inputBudget = useInput();
  const { setBudget, budget } = useBudgetContext();
  const { currentCurrency } = useCurrencyContext();
  const [isEditMode, toggleEditMode] = useToggle();
  const [isDisableSave, setDisableSave] = useState<boolean>(true);

  const handleSave = () => {
    setBudget(+inputBudget.value);
    toggleEditMode();
  };

  const handleEdit = () => {
    toggleEditMode();
  };

  const debounceBudget = useDebounce(inputBudget.value, 500);

  useEffect(
    () => (debounceBudget && +debounceBudget > 0 ? setDisableSave(false) : setDisableSave(true)),
    [debounceBudget],
  );

  return (
    <StyledBudgetCard>
      {isEditMode ? (
        <>
          <StyledInput {...inputBudget} placeholder="Enter Budget ..." type="number" />
          <StyledButton onClick={handleSave} disabled={isDisableSave}>
            Save
          </StyledButton>
        </>
      ) : (
        <>
          <StyledText>
            Budget: {currentCurrency.value}
            {budget}
          </StyledText>
          <StyledButton onClick={handleEdit}>Edit</StyledButton>
        </>
      )}
    </StyledBudgetCard>
  );
};
