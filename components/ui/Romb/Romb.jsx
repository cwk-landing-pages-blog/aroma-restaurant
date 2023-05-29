import React from 'react';
import styles from './romb.module.scss';

const Romb = ({ children }) => (
  <div className={styles.rombWrap}>
    <div className={styles.romb} />
    <div className={styles.children}>
      {children}
    </div>
  </div>
);

export default Romb;
