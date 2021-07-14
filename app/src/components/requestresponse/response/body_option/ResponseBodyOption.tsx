import Prism from 'prismjs';
import React, { FC, useEffect, useRef, useState } from 'react';
import { beautify } from '../../../../function/beautify';
import { useAppSelector } from '../../../../redux/hooks';
import { CopyIcon } from '../../../../svg/Copy';
import { GreenCheckIcon } from '../../../../svg/GreenCheck';
import { copyToClipboard } from '../../../../utils';
import '/assets/prism.css';

type ResponseBodyOptionProps = {} & React.ComponentProps<'div'>;
const useBody = () => {
  const response = useAppSelector((state) => state.requestresponse.response);
  const [body, setBody] = useState<string>();
  const contentType = useRef<string | null>(null);
  useEffect(() => {
    if (response) {
      const response_clone = response.clone();
      contentType.current = response_clone.headers.get('Content-Type');
      response_clone.text().then((value) => {
        setBody(value);
      });
    }
  }, [response]);
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
      <pre className={'language-js'} onMouseOver={() => setShowCopy(true)}>
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
