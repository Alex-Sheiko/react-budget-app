import { Currency } from "config";
import { ReactNode } from "react";

export interface Expense {
  name: string;
  cost: number;
  id: string;
}

export interface FormData {
  name: string;
  cost: number;
}

export interface CurrencyOption {
  value: Currency;
  label: keyof typeof Currency;
}

export interface ChildrenContextType {
  children: ReactNode;
}

export interface BudgetContextType {
  budget: number;
  setBudget: (value: number) => void;
}

export interface ExpenseContextType {
  expenses: Expense[];
  setNewExpense: (expense: Expense) => void;
  deleteExpense: (id: string) => void;
}

export interface CurrencyContextType {
  currentCurrency: CurrencyOption;
  currencies: CurrencyOption[];
  setCurrency: (option: CurrencyOption) => void;
}
