import type { FC } from 'react';
import React from 'react';
import styles from '../../../scss/save_item.module.scss';
interface SaveRequestItemProps {}
const SaveMainPick = () => <div className={styles.save__main__pick}></div>;
export const SaveRequestItem: FC<SaveRequestItemProps> = () => {
  return (
    <div className={styles.save}>
      <div className={styles.save__main}>
        <SaveMainPick />
        <div>HEllo World</div>
      </div>
      <div className={styles.save__buttons}>
        <button>Create</button>
        <button>Next</button>
      </div>
    </div>
  );
};
