import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CollectionsStateType = { collections: [] };
export const collectionsSlice = createSlice({
  initialState,
  name: 'collections',
  reducers: {
    addCollection: (state, action: PayloadAction<string>) => {
      state.collections.push({ items: [], name: action.payload });
    },
  },
});
