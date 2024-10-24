import { FC } from 'react';
import styles from './api_modal.module.css';

export const ApiModal:FC<{content:string}> = ({content}) => {

  return (
    <div className={styles.api}>
      {/* <h3 className={styles.api__title}>API</h3>
      <span className={styles.api__text}>Предоставим Вашему проекту удобное и быстрое решение по пополнению баланса Steam</span>
      <span className={styles.api__text}>За более подробной информацией, а также условиями и API документацией обращайтесь Telegram: 
      <a href="https://t.me/Vezdepaycom" target="_blank" className={styles.api__link}>@Vezdepay</a></span> */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

 