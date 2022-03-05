import { createSelector } from 'reselect';

import { uiSlice } from '../slices';

const getState = (state: RootState) => state[uiSlice.name];

export const getScreenWidth = createSelector([getState], ({ width }) => width);
