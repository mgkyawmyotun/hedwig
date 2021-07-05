import React, { FC, useRef, useState } from 'react';
import type { bodyOptionType } from 'types/request';
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
  const bodyOptionRef = useRef<bodyOptionType>([['', '']]);
  const methodRef = useRef<RequestMethodType>('GET');
  return (
    <div className={styles.main}>
      <Collection />
      <div className={styles.main__function}>
        <MainFunctionContext.Provider
          value={{
            method: methodRef,
            setMethod: (value) => {
              methodRef.current = value;
            },
            url: '',
            response,
            setResponse,
            options: { headers: headerOption, body: bodyOptionRef },
            setHeaderOption,
            params: [{ '': '' }],
            setBodyOption: (
              property: string,
              value: string | File,
              index: number,
            ) => {
              if (bodyOptionRef.current[index]) {
                bodyOptionRef.current[index] = [property, value];
                return;
              }
              bodyOptionRef.current.push([property, value]);
            },
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
