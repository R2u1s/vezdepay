import { FC } from 'react';
import styles from './contacts.module.css';

export const Contacts: FC<{ content: string | undefined}> = ({ content }) => {
  return (
    <div className={styles.contacts}>
      {content && content.length > 0 ? <div dangerouslySetInnerHTML={{ __html: content }} /> :
      <>
        <h3 className={styles.contacts__title}>Контакты</h3>
        <h4 className={styles.contacts__subtitle}>Beneficiary</h4>
        <span className={styles.contacts__text}>VEZDEPAY.COM</span>
        <h4 className={styles.contacts__subtitle}>Support TG: <a target="_blank" rel="noreferrer" className={styles.contacts__link} href="https://t.me/Vezdepaycom">@Vezdepay</a></h4>
        <h4 className={styles.contacts__subtitle}>Beneficiary's address:</h4>
        <span className={styles.contacts__text}>Rue du Trône 100, 3rd floor, Brussels, 1050, Belgium</span>
        <a href="mailto:vezdepay@gmail.com" className={styles.contacts__link}>vezdepay@gmail.com</a>
      </>}
    </div>
  );
};

