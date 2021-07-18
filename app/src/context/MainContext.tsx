import React from 'react';
// import type { RequestResponseContextType } from './RequestResponseContext';
type CollectionType = { name: string; items: RequestItemType[] };

type CollectionsType = CollectionType[];
type MainContextType = {
  collections: React.MutableRefObject<CollectionsType>;
  saveItem: (item: RequestItemType, collectionIndex: number) => void;
  createCollection: (name: string, index: number) => void;
  onClickRequestItem: (itemIndex: number, collectionIndex: number) => void;
};
const MainContext = React.createContext<MainContextType | null>(null);
MainContext.displayName = 'MainContext';

export { MainContext, CollectionsType };
