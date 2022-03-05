import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SliceState = { width: number | null; height: number | null };

const initialState: SliceState = { width: null, height: null };

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setViewport: (
      state,
      action: PayloadAction<{ width: number; height: number }>
    ) => {
      const { width, height } = action.payload;

      Object.assign(state, { width, height });
    },
  },
});
