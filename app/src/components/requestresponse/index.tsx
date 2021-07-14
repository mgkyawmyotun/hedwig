import React, { FC, useEffect, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import type {
  bodyOptionType,
  headerOptionType,
  ParamType,
} from 'types/request';
import type { RequestItemType } from '../../context/MainContext';
import { RequestResponseContext } from '../../context/RequestResponseContext';
import { store } from '../../redux/store';
import { RequestForm } from './request';
import { RequestOptionMain } from './request_option';
import { Response } from './response';
interface RequestResponseType {
  requestItem?: RequestItemType;
}
export const RequestResponse: FC<RequestResponseType> = ({ requestItem }) => {
  useEffect(() => {
    console.log(requestItem);
  }, [requestItem]);
  const [response, setResponse] = useState<Response | null>(null);
  const bodyOptionRef = useRef<bodyOptionType>(
    (requestItem && requestItem.options.body.current) || [['', '']],
  );
  const headerOptionRef = useRef<headerOptionType>(
    (requestItem && requestItem.options.headers.current) || [
      ['User-Agent', navigator.userAgent],
    ],
  );
  const paramRef = useRef<ParamType>(
    (requestItem && requestItem.params.current) || [['', '']],
  );
  const [method, setMethod] = useState<RequestMethodType>(
    (requestItem && requestItem.method) || 'GET',
  );
  useEffect(() => {
    console.log(requestItem, ' Request Item');
    console.log(method);
    if (requestItem) {
      setMethod(requestItem.method);
    }
  }, [requestItem]);
  return (
    <>
      <RequestResponseContext.Provider
        value={{
          name: '',
          method,
          setMethod,
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
        <Provider store={store}>
          <RequestForm />
          <RequestOptionMain />
          <Response />
        </Provider>
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
