import { useState } from "react";

export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = () => setValue((prevValue) => !prevValue);

  return [value, toggleValue];
};
