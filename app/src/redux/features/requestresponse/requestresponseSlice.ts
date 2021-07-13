import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState: RequestResponseStateType = {
  url: '',
  method: 'GET',
  options: { body: [], headers: [] },
  params: [],
  response: undefined,
};
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
        setOption<HeaderType>(
          state.options.headers,
          payload.header,
          payload.index,
        );
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
        setOption<BodyType>(state.options.body, payload.body, payload.index);
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
});

export const { urlAdded, methodSwitched, paramAdded } =
  requestresponseSlice.actions;
export default requestresponseSlice.reducer;

function setOption<V>(arrays: any, data: V, index: number) {
  if (arrays[index]) {
    arrays[index] = data;
    return;
  }
  arrays.push(data);
}
