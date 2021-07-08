import React from 'react';

type CollectionContextType = {};
const CollectionContext = React.createContext<CollectionContextType | null>(
  null,
);
CollectionContext.displayName = 'CollectionContext(CollectionContext)';

export { CollectionContext };
