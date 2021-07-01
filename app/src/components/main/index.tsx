import React, { FC, useState } from 'react';
import styles from '../../scss/main.module.scss';
import { Collection } from './collection';
import { MainFunctionContext } from './MainFunctionContext';
import { RequestForm } from './request';
import { RequestOptionMain } from './request_option';
import { Response } from './response';

export const Main: FC = () => {
  const [response, setResponse] = useState<Response | null>(null);
  const [headerOption, setHeaderOption] = useState<[string, string][]>([
    ['User-Agent', navigator.userAgent],
  ]);

  return (
    <div className={styles.main}>
      <Collection />
      <div className={styles.main__function}>
        <MainFunctionContext.Provider
          value={{
            method: 'GET',
            url: '',
            response,
            setResponse,
            options: { headers: headerOption, body: '' },
            setHeaderOption,
          }}
        >
          <RequestForm />
          <RequestOptionMain />
          <Response />
        </MainFunctionContext.Provider>
      </div>
    </div>
  );
};
