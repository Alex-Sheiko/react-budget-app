import React from "react";
import { Wrapper } from "ui";
import { Expenses, Form } from "components";

export const App = () => {
  return (
    <Wrapper>
      <Expenses />
      <Form />
    </Wrapper>
  );
};
