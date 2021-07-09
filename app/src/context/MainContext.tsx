import React from 'react';
import type { RequestResponseContextType } from './RequestResponseContext';
type RequestItemType = Pick<
  RequestResponseContextType,
  'name' | 'method' | 'options' | 'url' | 'params'
>;
type CollectionType = { name?: string; items?: RequestItemType[] };

type CollectionsType = CollectionType[];
type MainContextType = {
  collections: React.MutableRefObject<CollectionsType>;
  saveItem: (item: RequestItemType) => void;
  createCollection: (name: string, index: number) => void;
};
const MainContext = React.createContext<MainContextType | null>(null);
MainContext.displayName = 'MainContext';

export { MainContext, CollectionsType };
