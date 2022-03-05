import { useState, useEffect } from 'react';

let prevIsBrowser = false;

export const useBrowser = () => {
  const [isBrowser, setBrowser] = useState(prevIsBrowser);

  useEffect(() => {
    if (prevIsBrowser && isBrowser) {
      return;
    }

    prevIsBrowser = true;
    setBrowser(true);
  }, [isBrowser]);

  return isBrowser;
};
