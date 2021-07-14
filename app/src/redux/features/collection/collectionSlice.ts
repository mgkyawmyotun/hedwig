import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CollectionsStateType = [];
const collectionsSlice = createSlice({
  initialState,
  name: 'collections',
  reducers: {
    addCollection: (state, action: PayloadAction<string>) => {
      state.push({ items: [], name: action.payload });
    },
  },
});
export default collectionsSlice.reducer;
