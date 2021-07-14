import { configureStore } from '@reduxjs/toolkit';
import collectionsReducer from './features/collection/collectionSlice';
import requestresponseReducer from './features/requestresponse/requestresponseSlice';
// ...

const store = configureStore({
  reducer: {
    collections: collectionsReducer,
    requestresponse: requestresponseReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store };
