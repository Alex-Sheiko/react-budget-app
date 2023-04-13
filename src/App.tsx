import React from "react";
import { Wrapper } from "ui";
import { Budget, Expenses, Form } from "components";

export const App = () => {
  return (
    <Wrapper>
      <Budget />
      <Expenses />
      <Form />
    </Wrapper>
  );
};
