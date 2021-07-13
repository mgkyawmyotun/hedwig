import { createSlice } from '@reduxjs/toolkit';

const initialState: CollectionState = { collections: [] };
createSlice({ initialState, name: 'collection', reducers: {} });
