import React from 'react';
import type { RequestResponseContextType } from './RequestResponseContext';
type RequestItemType = Pick<
  RequestResponseContextType,
  'name' | 'method' | 'options' | 'url' | 'params'
>;
type MainContextType = {
  collection: [
    {
      name: string;
      items: RequestItemType[];
    },
  ];
  saveItem: (item: RequestItemType) => void;
};
const MainContext = React.createContext<MainContextType | null>(null);
MainContext.displayName = 'MainContext';

export { MainContext };
