import React, { FC, useContext, useMemo, useRef, useState } from 'react';
import { MainContext } from '../../../context/MainContext';
import { RequestResponseContext } from '../../../context/RequestResponseContext';
import styles from '../../../scss/save_item.module.scss';
interface SaveRequestItemProps {}
function SaveRequestName({
  name,
  onChange,
}: {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={styles.save__name}>
      <input
        type="text"
        placeholder="request name"
        value={name}
        onChange={onChange}
      />
    </div>
  );
}
export const SaveRequestItem: FC<SaveRequestItemProps> = () => {
  const context = useContext(MainContext);
  const contextReq = useContext(RequestResponseContext);
  const [collectionValue, setCollectionValue] = useState<number>();
  const oldLi = useRef<EventTarget & HTMLLIElement>();
  const [next, showNext] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const SaveMainPick = useMemo(() => {
    return (
      <div className={styles.save__main__pick}>
        {context &&
          context.collections.current.map((collection, index) => (
            <li
              key={index}
              onClick={(e) => {
                if (oldLi.current) {
                  oldLi.current.classList.toggle(styles.pick);
                }
                e.currentTarget.classList.toggle(styles.pick);
                oldLi.current = e.currentTarget;
                setCollectionValue(index);
              }}
            >
              {collection.name}
            </li>
          ))}
      </div>
    );
  }, [context, context && context.collections.current.length]);
  return (
    <div className={styles.save}>
      <div className={styles.save__main}>
        {next ? (
          <SaveRequestName
            name={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
        ) : context && context.collections.current.length === 0 ? (
          <div className={styles.no_item}>No Collection / Create One</div>
        ) : (
          SaveMainPick
        )}
      </div>
      <div className={styles.save__buttons}>
        {!next ? (
          <button
            disabled={collectionValue === undefined}
            onClick={() => {
              showNext(true);
            }}
          >
            Next
          </button>
        ) : (
          <>
            <button
              onClick={() => {
                setCollectionValue(undefined);
                showNext(false);
              }}
            >
              Back
            </button>
            <button
              onClick={() => {
                if (context && contextReq) {
                  const { method, params, options, url } = contextReq;
                  context.saveItem({ method, options, params, url, name });
                }
              }}
              disabled={name.length <= 0}
            >
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
};
