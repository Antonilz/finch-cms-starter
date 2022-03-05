import smoothscroll from 'smoothscroll-polyfill';

declare global {
  interface Window {
    isSmoothScrollPolyfillSet: boolean;
  }
}

export const isDomNode = (entity: string | HTMLElement): boolean =>
  typeof entity === 'object' && entity.nodeType !== undefined;

const setScrollPolyfill = () => {
  if (typeof window !== 'undefined' && !window.isSmoothScrollPolyfillSet) {
    smoothscroll.polyfill();
    window.isSmoothScrollPolyfillSet = true;
  }
};

const setRestorationToManual = () => {
  if (
    typeof window !== 'undefined' &&
    'scrollRestoration' in window.history &&
    window.history.scrollRestoration !== 'manual'
  ) {
    window.history.scrollRestoration = 'manual';
  }
};

const getElement = (selector: string | HTMLElement): Element | null => {
  if (typeof selector === 'string') {
    return document.querySelector(selector) || null;
  }

  if (isDomNode(selector)) {
    return selector;
  }

  return null;
};

export const scrollToPosition = ({
  behavior,
  left = 0,
  top,
  selector,
}: {
  behavior: ScrollBehavior;
  left?: number;
  top: number;
  selector: string | HTMLElement;
}): void => {
  setScrollPolyfill();
  setRestorationToManual();

  const element = getElement(selector);

  if (element) {
    element.scrollTo({ top, left, behavior });
  }
};

interface ScrollToElementProps {
  (
    selector: string | HTMLElement,
    options?: {
      behavior?: ScrollBehavior;
      block?: ScrollLogicalPosition;
      inline?: ScrollLogicalPosition;
    }
  ): void;
}

export const scrollToElement: ScrollToElementProps = (
  selector,
  { behavior = 'smooth', block = 'start', inline = 'nearest' } = {}
): void => {
  setScrollPolyfill();
  setRestorationToManual();

  const element = getElement(selector);

  if (element) {
    element.scrollIntoView({ behavior, block, inline });
  }
};
