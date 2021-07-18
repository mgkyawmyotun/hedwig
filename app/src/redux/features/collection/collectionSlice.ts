import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CollectionsStateType = [];
const collectionsSlice = createSlice({
  initialState,
  name: 'collections',
  reducers: {
    collectionAdded: {
      reducer: (
        state,
        {
          payload: { index, name },
        }: PayloadAction<{ name: string; index: number }>,
      ) => {
        if (state[index]) {
          const current_collection = state[index];
          state[index] = {
            name,
            items: current_collection.items,
          };
          return;
        }
        state.push({ name, items: [] });
      },
      prepare: (name: string, index: number) => {
        return {
          payload: { name, index },
        };
      },
    },
    itemAdded: {
      reducer: (
        state,
        {
          payload: { collectionIndex, item },
        }: PayloadAction<{ item: RequestItemType; collectionIndex: number }>,
      ) => {
        if (state[collectionIndex]) {
          state[collectionIndex].items.push(item);
        }
      },
      prepare: (item: RequestItemType, collectionIndex: number) => {
        return {
          payload: { item, collectionIndex },
        };
      },
    },
  },
});
export const { collectionAdded, itemAdded } = collectionsSlice.actions;
export default collectionsSlice.reducer;
