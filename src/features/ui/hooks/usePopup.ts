import { useState } from 'react';

import { useScrollLock } from './useScrollLock';

export const usePopup = (defaultState = false) => {
  const [isOpen, setIsOpen] = useState(defaultState);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((currentIsOpen) => !currentIsOpen);

  useScrollLock(isOpen);

  return { open, close, toggle, isOpen };
};
