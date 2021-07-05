import React from 'react';
import type { ParamsType, ReqeustOptions } from './../../../types/request.d';
import type { RequestMethodType } from './request/type';

export type MainContextType = {
  url: string;
  method: React.MutableRefObject<RequestMethodType>;
  setMethod: (value: RequestMethodType) => void;
  options: ReqeustOptions;
  params: ParamsType;

  response: Response | null;
  setResponse: React.Dispatch<React.SetStateAction<Response | null>>;
  setHeaderOption: (p: string, v: string, i: number) => void;
  setBodyOption: (p: string, v: string | File, i: number) => void;
  setParamOption: (p: string, v: string, i: number) => void;
};
const MainFunctionContext = React.createContext<MainContextType | null>(null);
MainFunctionContext.displayName = 'MainFunctionContext(RequestObject)';

export { MainFunctionContext };
