import { useState, useEffect } from 'react';
import { useBrowser } from '~hooks/useBrowser';
import { useColorScheme } from '~features/ui/hooks/useColorScheme';
import { GlobalStyles, Checkbox } from './styles';

export const GlobalTheme: React.FC<{ dark: boolean }> = ({ dark }) => {
  const [forcedDarkTheme, setForcedDarkTheme] = useState(Boolean(dark));
  const isBrowser = useBrowser();

  const handleChangeTheme = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setForcedDarkTheme(ev.target.checked);
  };

  const [, setTheme] = useColorScheme();

  useEffect(() => {
    setTheme({ isDarkTheme: forcedDarkTheme });
  }, [forcedDarkTheme, setTheme]);

  return (
    <>
      <Checkbox>
        <input
          type="checkbox"
          checked={forcedDarkTheme}
          onChange={handleChangeTheme}
        />
        <div />
      </Checkbox>
      <GlobalStyles
        primary={isBrowser}
        dark={forcedDarkTheme} /* adaptive={adaptive} */
      />
    </>
  );
};
