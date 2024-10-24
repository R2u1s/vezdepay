import { FC } from 'react';
import styles from './crypto.module.css';

export const Crypto:FC<{content:string}> = ({content}) => {

  return (
    <div className={styles.crypto}>
      {/* <span className={styles.crypto__text}>Благодарим вас. Менеджер свяжется с вами в ближайшее время</span> */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

 