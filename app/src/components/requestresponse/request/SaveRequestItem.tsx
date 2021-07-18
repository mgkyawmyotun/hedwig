import React, { FC, useMemo, useRef, useState } from 'react';
import { itemAdded } from '../../../redux/features/collection/collectionSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import styles from '../../../scss/save_item.module.scss';
interface SaveRequestItemProps {
  onClose: () => void;
}
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
export const SaveRequestItem: FC<SaveRequestItemProps> = ({ onClose }) => {
  const [collectionValue, setCollectionValue] = useState<number>();
  const oldLi = useRef<EventTarget & HTMLLIElement>();
  const [next, showNext] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const collections = useAppSelector((state) => state.collections);
  const requestresponse = useAppSelector((state) => state.requestresponse);
  const dispatch = useAppDispatch();

  function reset() {
    showNext(false);
    setName('');
    oldLi.current = undefined;
    setName('');
  }
  const SaveMainPick = useMemo(() => {
    return (
      <div className={styles.save__main__pick}>
        {collections.map((collection, index) => (
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
  }, [collections.length]);
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
        ) : collections.length === 0 ? (
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
                if (requestresponse && collectionValue != undefined) {
                  const { url, body, headers, params, method } =
                    requestresponse;
                  dispatch(
                    itemAdded(
                      { url, body, headers, params, method, name },
                      collectionValue,
                    ),
                  );
                  reset();
                  onClose();
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
