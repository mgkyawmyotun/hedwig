import React, { FC, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import styles from '../scss/main.module.scss';
import { Collection } from './collection';
import { RequestResponse } from './requestresponse';
// import {} from 'main'

interface MainProps {}
export const Main: FC<MainProps> = () => {
  const [requestItem, setRequestItem] = useState<RequestItemType>();
  return (
    <div className={styles.main}>
      <Provider store={store}>
        <Collection />
        <div className={styles.main__function}>
          <RequestResponse requestItem={requestItem} />
        </div>
      </Provider>
    </div>
  );
};
