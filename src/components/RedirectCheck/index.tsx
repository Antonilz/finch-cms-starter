import { useEffect } from 'react';
import { redirectIfNeeded } from './redirectIfNeeded';

export const RedirectCheck = (): null => {
  useEffect(() => {
    redirectIfNeeded();
  }, []);

  return null;
};
