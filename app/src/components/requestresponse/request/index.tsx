import React, { FC, useContext, useEffect, useState } from 'react';
import validator from 'validator';
import { RequestResponseContext } from '../../../context/RequestResponseContext';
import { makeRequest } from '../../../function/request';
import { urlAdded } from '../../../redux/features/requestresponse/requestresponseSlice';
import { useAppDispatch } from '../../../redux/hooks';
import styles from '../../../scss/request.module.scss';
import { RequestInput } from './RequestInput';
import { RequestMethod } from './RequestMethod';
import { SaveButton } from './SaveButton';
import { SendButton } from './SendButton';

export const RequestForm: FC = () => {
  const context = useContext(RequestResponseContext);
  const [URLValue, setURLValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  // const url = useAppSelector((state) => state.requestresponse.url);

  useEffect(() => {
    if (URLValue.length > 0) {
      // if (URLValue.includes('http://') || URLValue.includes('https://')) {
      const isValidURL = validator.isURL(URLValue, {
        require_tld: false,
        require_host: true,
        require_valid_protocol: true,
        require_protocol: true,
      });
      setIsValid(isValidURL);
      // }
    }
  }, [URLValue]);

  return (
    <div className={styles.request}>
      <RequestMethod />
      <RequestInput
        value={URLValue}
        onURLChange={setURLValue}
        isValid={isValid}
      />
      <div>
        <SendButton
          onSend={async () => {
            if (URLValue.length == 0) {
              setIsValid(false);
              return;
            }
            dispatch(urlAdded(URLValue));
            if (context) {
              try {
                const response = await makeRequest(
                  URLValue,
                  context.method,
                  context.options,
                  context.params,
                );
                context.setResponse(response);
              } catch (error) {
                console.log(error);
              }
            }
          }}
          disabled={!isValid}
        />
        <SaveButton disabled={!isValid} />
      </div>
    </div>
  );
};
