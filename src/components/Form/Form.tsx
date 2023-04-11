import { v4 } from "uuid";
import { FormData } from "types/types";
import { Title, ErrorMessage } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledForm, StyledFormControls, StyledInputForm } from "./styles";
import { useBudgetContext, useExpensesContext } from "context";

export const Form = () => {
  const { setNewExpense } = useExpensesContext();
  const { budget } = useBudgetContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FormData> = ({ name, cost }) => {
    if (budget > 0) {
      setNewExpense({ name, cost, id: v4() });
      reset();
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title text="Add Expense" />
      <StyledFormControls>
        <StyledInputForm
          {...register("name", {
            required: "Name is required",
            pattern: { value: /[A-Za-z]/, message: "Only letters" },
            minLength: { value: 2, message: "Minimum characters 2" },
            maxLength: { value: 15, message: "A lot of letters" },
          })}
          placeholder="Enter name ..."
          type="text"
        />
        {errors.name && <ErrorMessage message={errors.name?.message} />}
        <StyledInputForm
          {...register("cost", {
            required: "Cost is required",
            minLength: { value: 1, message: "Minimum characters 1" },
            maxLength: { value: 5, message: "High price!" },
          })}
          type="text"
          placeholder="Enter cost ..."
        />
      </StyledFormControls>
      {errors.cost && <ErrorMessage message={errors.cost?.message} />}
    </StyledForm>
  );
};
