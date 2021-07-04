import React, { FC, useRef, useState } from 'react';
import styles from '../../scss/main.module.scss';
import { Collection } from './collection';
import { MainFunctionContext } from './MainFunctionContext';
import { RequestForm } from './request';
import type { RequestMethodType } from './request/type';
import { RequestOptionMain } from './request_option';
import { Response } from './response';

export const Main: FC = () => {
  const [response, setResponse] = useState<Response | null>(null);
  const [headerOption, setHeaderOption] = useState<[string, string][]>([
    ['User-Agent', navigator.userAgent],
  ]);
  const methodRef = useRef<RequestMethodType>('GET');

  return (
    <div className={styles.main}>
      <Collection />
      <div className={styles.main__function}>
        <MainFunctionContext.Provider
          value={{
            method: methodRef.current,
            url: '',
            response,
            setResponse,
            options: { headers: headerOption, body: [['', '']] },
            setHeaderOption,
            params: [{ '': '' }],
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
