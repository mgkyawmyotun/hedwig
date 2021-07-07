import Prism from 'prismjs';
import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { beautify } from '../../../../function/beautify';
import { CopyIcon } from '../../../../svg/Copy';
import { GreenCheckIcon } from '../../../../svg/GreenCheck';
import { copyToClipboard } from '../../../utils';
import { MainFunctionContext } from '../../MainFunctionContext';
import '/assets/prism.css';

type ResponseBodyOptionProps = {} & React.ComponentProps<'div'>;
const useBody = () => {
  const context = useContext(MainFunctionContext);
  const [body, setBody] = useState<string>();
  const contentType = useRef<string | null>(null);
  useEffect(() => {
    if (context && context.response) {
      const response = context.response.clone();
      contentType.current = response.headers.get('Content-Type');
      response.text().then((value) => {
        setBody(value);
      });
    }
  }, [context]);
  return [body, setBody, contentType.current] as const;
};
export const ResponseBodyOption: FC<ResponseBodyOptionProps> = ({
  ...props
}) => {
  const [body, setBody, contentType] = useBody();
  const [showCopy, setShowCopy] = useState(false);
  const [showGreenMark, setShowGreenMark] = useState(false);

  return (
    <div
      {...props}
      data-id="response-body"
      onMouseLeave={() => setShowCopy(false)}
    >
      <div>
        <button
          onClick={() => {
            if (body) {
              copyToClipboard(body);
              setShowGreenMark(true);
            }
          }}
          style={{ display: showCopy ? 'block' : 'none' }}
          onMouseLeave={() => setShowGreenMark(false)}
        >
          {showGreenMark ? <GreenCheckIcon /> : <CopyIcon />}
        </button>

        <button
          onClick={() => {
            setBody(beautify(body, contentType));
          }}
        >
          {'{ }'}
        </button>
      </div>
      <pre
        className={'language-js'}
        onMouseOver={() => setShowCopy(true)}
        // onMouseLeave={() => setShowCopy(false)}
      >
        {body && (
          <code
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(body, Prism.languages.js, 'js'),
            }}
          ></code>
        )}
      </pre>
    </div>
  );
};
