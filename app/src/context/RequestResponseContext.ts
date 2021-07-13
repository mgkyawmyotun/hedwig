import React from 'react';
import type { ParamsType, ReqeustOptions } from './../../types/request.d';

export type RequestResponseContextType = {
  name: string;
  url: string;
  method: RequestMethodType;
  options: ReqeustOptions;
  params: ParamsType;
  response: Response | null;
  setMethod: React.Dispatch<React.SetStateAction<RequestMethodType>>;
  setResponse: React.Dispatch<React.SetStateAction<Response | null>>;
  setHeaderOption: (p: string, v: string, i: number) => void;
  setBodyOption: (p: string, v: string | File, i: number) => void;
  setParamOption: (p: string, v: string, i: number) => void;
};
const RequestResponseContext =
  React.createContext<RequestResponseContextType | null>(null);
RequestResponseContext.displayName = 'RequestResponseContext(RequestObject)';

export { RequestResponseContext };
