import { useState } from "react";

export const useToggle = (initialValue: boolean = false): [value: boolean, toogle: () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = () => setValue((prevValue) => !prevValue);

  return [value, toggleValue];
};
