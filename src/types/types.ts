import { Currency } from '../config/currency';

export interface CurrencyOption {
  value: Currency;
  label: string;
}

export interface ExpenseType {
  name: string;
  cost: number;
  id: string;
}
