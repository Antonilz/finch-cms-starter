import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import throttle from 'lodash/throttle';
import { uiSlice } from '~features/ui/model/slices';

/**
 * Fix for mobile "100vh" problem with address bar and controls.
 *
 * Use in CSS (with fallback):
 * ```
 * min-height: 100vh;
 * min-height: calc(var(--vh, 1vh) * 100);
 * ```
 * */
const updateVh = () => {
  document.documentElement.style.setProperty(
    '--vh',
    `${window.innerHeight * 0.01}px`
  );
};

export const useResizeObserver = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateScreenSize = throttle(() => {
      const { innerWidth, innerHeight } = window;

      dispatch(
        uiSlice.actions.setViewport({ width: innerWidth, height: innerHeight })
      );
    }, 500);

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, [dispatch]);

  useEffect(() => {
    updateVh();
    window.addEventListener('resize', updateVh);

    return () => window.removeEventListener('resize', updateVh);
  }, []);
};
