import { useState, useEffect } from 'react';
import { useBrowser } from '~hooks/useBrowser';
import { useTheme } from '~hooks/useTheme';
import { GlobalStyles, Checkbox } from './styles';

export const GlobalTheme: React.FC<{ dark: boolean }> = ({ dark }) => {
  const [forsedDarkTheme, setForsedDarkTheme] = useState(Boolean(dark));
  const isBrowser = useBrowser();

  const handleChangeTheme = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setForsedDarkTheme(ev.target.checked);
  };

  const [, setTheme] = useTheme();

  useEffect(() => {
    setTheme({ isDarkTheme: forsedDarkTheme });
  }, [forsedDarkTheme, setTheme]);

  return (
    <>
      <Checkbox>
        <input
          type="checkbox"
          checked={forsedDarkTheme}
          onChange={handleChangeTheme}
        />
        <div />
      </Checkbox>
      <GlobalStyles
        primary={isBrowser}
        dark={forsedDarkTheme} /* adaptive={adaptive} */
      />
    </>
  );
};
