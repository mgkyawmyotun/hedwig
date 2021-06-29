import React from 'react';
import type { ParamsType, ReqeustOptions } from './../../../types/request.d';
import type { RequestMethodType } from './request/type';

export type MainContextType = {
  url: string;
  method: RequestMethodType;
  options?: ReqeustOptions;
  params?: ParamsType;
};
const MainFunctionContext = React.createContext<MainContextType | null>(null);
MainFunctionContext.displayName = 'MainFunctionContext(RequestObject)';

export { MainFunctionContext };
