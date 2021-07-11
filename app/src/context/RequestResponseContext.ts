import React from 'react';
import type { ParamsType, ReqeustOptions } from '../../types/request';
import type { RequestMethodType } from '../components/requestresponse/request/type';

export type RequestResponseContextType = {
  name: string;
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
const RequestResponseContext =
  React.createContext<RequestResponseContextType | null>(null);
RequestResponseContext.displayName = 'RequestResponseContext(RequestObject)';

export { RequestResponseContext };
