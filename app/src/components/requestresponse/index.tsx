import React, { FC, useEffect, useRef, useState } from 'react';
import type { RequestItemType } from 'src/context/MainContext';
import type {
  bodyOptionType,
  headerOptionType,
  ParamType,
} from 'types/request';
import { RequestResponseContext } from '../../context/RequestResponseContext';
import { RequestForm } from './request';
import type { RequestMethodType } from './request/type';
import { RequestOptionMain } from './request_option';
import { Response } from './response';
interface RequestResponseType {
  requestItem?: RequestItemType;
}
export const RequestResponse: FC<RequestResponseType> = ({ requestItem }) => {
  const [response, setResponse] = useState<Response | null>(null);
  const bodyOptionRef = useRef<bodyOptionType>(
    (requestItem && requestItem.options.body.current) || [['', '']],
  );
  const methodRef = useRef<RequestMethodType>(
    (requestItem && requestItem.method.current) || 'GET',
  );
  const headerOptionRef = useRef<headerOptionType>(
    (requestItem && requestItem.options.headers.current) || [
      ['User-Agent', navigator.userAgent],
    ],
  );
  const paramRef = useRef<ParamType>(
    (requestItem && requestItem.params.current) || [['', '']],
  );
  useEffect(() => {
    console.log(requestItem, ' Request Item');
    console.log(methodRef);
  });
  return (
    <>
      <RequestResponseContext.Provider
        value={{
          name: '',
          method: methodRef,
          setMethod: (value) => {
            methodRef.current = value;
          },
          url: (requestItem && requestItem.url) || '',
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
