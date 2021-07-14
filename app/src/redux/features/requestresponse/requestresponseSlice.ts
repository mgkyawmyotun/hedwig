import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { formatParams } from '../../../utils';
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
  console.log(getState());
  const { headers, url, body, method, params } = getState().requestresponse;
  let urlWithParams = '';

  if (params) {
    urlWithParams = url + formatParams(params);
  }
  const response = await fetch(urlWithParams, { headers, method });
  return response;
});
const requestresponseSlice = createSlice({
  initialState,
  name: 'requestresponse',
  reducers: {
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
    builder.addCase(makeRequest.fulfilled, (state, action) => {
      state.response = action.payload;
    });
  },
});

export const { urlAdded, methodSwitched, paramAdded, headerAdded, bodyAdded } =
  requestresponseSlice.actions;
export default requestresponseSlice.reducer;

function setOption<V>(arrays: any, data: V, index: number) {
  if (arrays[index]) {
    arrays[index] = data;
    return;
  }
  arrays.push(data);
}
