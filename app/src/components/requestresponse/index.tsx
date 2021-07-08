import React, { FC, useRef, useState } from 'react';
import type {
  bodyOptionType,
  headerOptionType,
  ParamType,
} from 'types/request';
import { RequestForm } from './request';
import type { RequestMethodType } from './request/type';
import { RequestResponseContext } from './RequestResponseContext';
import { RequestOptionMain } from './request_option';
import { Response } from './response';
export const RequestResponse: FC = () => {
  const [response, setResponse] = useState<Response | null>(null);
  const bodyOptionRef = useRef<bodyOptionType>([['', '']]);
  const methodRef = useRef<RequestMethodType>('GET');
  const headerOptionRef = useRef<headerOptionType>([
    ['User-Agent', navigator.userAgent],
  ]);
  const paramRef = useRef<ParamType>([['', '']]);
  return (
    <>
      <RequestResponseContext.Provider
        value={{
          method: methodRef,
          setMethod: (value) => {
            methodRef.current = value;
          },
          url: '',
          response,
          setResponse,
          options: { headers: headerOptionRef, body: bodyOptionRef },
          setHeaderOption: (p, v, n) => {
            setOption(headerOptionRef.current, p, v, n);
          },
          params: paramRef,
          setParamOption: (p, v, n) => {
            setOption(paramRef.current, p, v, n);
          },
          setBodyOption: (
            property: string,
            value: string | File,
            index: number,
          ) => {
            setOption<string, string | File>(
              bodyOptionRef.current,
              property,
              value,
              index,
            );
          },
        }}
      >
        <RequestForm />
        <RequestOptionMain />
        <Response />
      </RequestResponseContext.Provider>
    </>
  );
};

function setOption<K, V>(option: any, property: K, value: V, index: number) {
  if (option[index]) {
    option[index] = [property, value];
    return;
  }
  option.push([property, value]);
}
