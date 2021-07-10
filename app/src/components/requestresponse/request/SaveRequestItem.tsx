import React, { FC, useContext } from 'react';
import { MainContext } from '../../../context/MainContext';
import styles from '../../../scss/save_item.module.scss';
interface SaveRequestItemProps {}
export const SaveRequestItem: FC<SaveRequestItemProps> = () => {
  const context = useContext(MainContext);
  const SaveMainPick = () => (
    <div className={styles.save__main__pick}>
      {context &&
        context.collections.current.map((collection, index) => (
          <li key={index} onClick={(e) => {}}>
            {collection.name}
          </li>
        ))}
    </div>
  );
  return (
    <div className={styles.save}>
      <div className={styles.save__main}>
        {context && context.collections.current.length === 0 ? (
          <div className={styles.no_item}>No Collection / Create One</div>
        ) : (
          <SaveMainPick />
        )}
      </div>
      <div className={styles.save__buttons}>
        <button>Create</button>
        <button>Next</button>
      </div>
    </div>
  );
};
