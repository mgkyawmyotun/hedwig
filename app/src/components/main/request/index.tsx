import React, { FC, useContext, useState } from 'react';
import { makeRequest } from '../../../function/request';
import styles from '../../../scss/request.module.scss';
import { MainFunctionContext } from '../MainFunctionContext';
import { RequestInput } from './RequestInput';
import { RequestMethod } from './RequestMethod';
import { SaveButton } from './SaveButton';
import { SendButton } from './SendButton';

export const RequestForm: FC = () => {
  const context = useContext(MainFunctionContext);
  const [URLValue, setURLValue] = useState<string>('');

  return (
    <div className={styles.request}>
      <RequestMethod />
      <RequestInput value={URLValue} onURLChange={setURLValue} />
      <div>
        <SendButton
          onSend={async () => {
            if (context) {
              context.url = URLValue;
              try {
                const response = await makeRequest(context.url, context.method);
                console.log(response);
              } catch (error) {
                console.log(error);
              }
            }
          }}
        />
        <SaveButton />
      </div>
    </div>
  );
};
