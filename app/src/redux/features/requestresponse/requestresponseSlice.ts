import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  formatParams,
  isGetMethod,
  setOption,
  toFormData,
} from '../../../utils';
import type { RootState } from './../../store';
const initialState: RequestResponseStateType = {
  url: '',
  method: 'GET',
  params: [],
  response: undefined,
  body: [],
  headers: [],
};
export const makeRequest = createAsyncThunk<
  Response,
  void,
  { state: RootState }
>('requestresponse/response', async (arg, { getState }) => {
  const { headers, url, body, method, params } = getState().requestresponse;
  const response = await fetch(formatParams(params)(url), {
    headers,
    method,
    body: isGetMethod(method) ? null : toFormData(body),
    credentials: 'include',
  });
  return response;
});
const requestresponseSlice = createSlice({
  initialState,
  name: 'requestresponse',
  reducers: {
    requestPicked: (state, action: PayloadAction<RequestItemType>) => {
      state = Object.assign(state, action.payload);
      state.response = undefined;
    },
    methodSwitched: (
      state,
      { payload: method }: PayloadAction<RequestMethodType>,
    ) => {
      state.method = method;
    },
    urlAdded: (state, { payload: url }: PayloadAction<URLType>) => {
      state.url = url;
    },
    headerAdded: {
      reducer: (
        state,
        { payload }: PayloadAction<{ header: HeaderType; index: number }>,
      ) => {
        setOption<HeaderType>(state.headers, payload.header, payload.index);
      },
      prepare: (header: HeaderType, index: number) => {
        return {
          payload: { header, index },
        };
      },
    },
    bodyAdded: {
      reducer: (
        state,
        { payload }: PayloadAction<{ body: BodyType; index: number }>,
      ) => {
        setOption<BodyType>(state.body, payload.body, payload.index);
      },
      prepare: (body: BodyType, index: number) => {
        return {
          payload: { body, index },
        };
      },
    },
    paramAdded: {
      reducer: (
        state,
        { payload }: PayloadAction<{ param: ParamType; index: number }>,
      ) => {
        setOption<ParamType>(state.params, payload.param, payload.index);
      },
      prepare: (param: ParamType, index: number) => {
        return {
          payload: { param, index },
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(makeRequest.fulfilled, (state, action) => {
        state.response = action.payload;
      })
      .addCase(makeRequest.rejected, (state, action) => {
        console.log(action.error);
      });
  },
});

export const {
  urlAdded,
  methodSwitched,
  paramAdded,
  headerAdded,
  bodyAdded,
  requestPicked,
} = requestresponseSlice.actions;
export default requestresponseSlice.reducer;
