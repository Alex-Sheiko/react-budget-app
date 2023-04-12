import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyles } from "./ui";
import {
  AppContextProvider,
  BudgetContextProvider,
  CurrencyContextProvider,
  ExpensesContextProvider,
} from "context";

const providers = [BudgetContextProvider, CurrencyContextProvider, ExpensesContextProvider];

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <AppContextProvider components={providers}>
      <GlobalStyles />
      <App />
    </AppContextProvider>
  </>,
);
