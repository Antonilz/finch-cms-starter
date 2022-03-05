import { useState, useRef } from 'react';
import { useRouter } from 'next/router';

import { redirect } from '~features/routing';
import { useOnClickOutside } from '~features/ui/hooks/useOnClickOutside';
import { locales } from '../../constants/locales';
import { getSavedLocale, setSavedLocale } from '../../utils/cookieHelpers';

import { Label, Wrapper, Options, Option, CurrentValue } from './styles';

export const LocaleSelect = () => {
  const { pathname, query } = useRouter();
  const [currentLocale, setCurrentLocale] = useState<string>(getSavedLocale());

  const dropdownRef = useRef<HTMLDivElement>();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useOnClickOutside(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const onItemClick = (value: string) => () => {
    setCurrentLocale(value);
    setSavedLocale(value);
    setIsDropdownOpen(false);
    redirect({
      route: pathname,
      params: query,
      options: { locale: value },
    });
  };

  const openDropdown = () => {
    setTimeout(() => {
      if (!isDropdownOpen) {
        setIsDropdownOpen(true);
      }
    }, 50);
  };

  return (
    <Wrapper>
      <CurrentValue onClick={openDropdown} $isActive={isDropdownOpen}>
        {currentLocale}
      </CurrentValue>
      {isDropdownOpen && (
        <Options ref={dropdownRef}>
          {Object.values(locales).map((locale) => (
            <Option
              key={locale}
              onClick={onItemClick(locale)}
              selected={currentLocale === locale}
            >
              <Label>{locale}</Label>
            </Option>
          ))}
        </Options>
      )}
    </Wrapper>
  );
};
