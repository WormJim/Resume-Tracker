import { useCallback, useEffect, useState } from 'react';

export const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
  const [open, setOpen] = useState(initialValue);

  const toggleOpen = useCallback(() => {
    setOpen((val) => !val);
  }, [setOpen]);

  useEffect(() => {
    setOpen(initialValue);
  }, [initialValue]);

  return [open, toggleOpen];
};
