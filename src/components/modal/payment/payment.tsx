import { FC } from 'react';
import styles from './payment.module.css';
import { TSettings } from "../../../types/types";

export const Payment: FC<{ settings: TSettings | undefined }> = ({ settings }) => {

  let card_number = '';
  let card_bank = '';
  let phone_number = '';
  let phone_bank = '';

  if (settings) {
    card_number = settings.card_number || '';
    card_bank = settings.card_bank || '';
    phone_number = settings.phone_number || '';
    phone_bank = settings.phone_bank || '';
  }

  return (
    <div className={styles.payments}>
      <svg width="50" height="50" fill="#62C584"> <path d="M25.1 49.28A24.64 24.64 0 0 1 .5 24.68 24.64 24.64 0 0 1 25.1.07a24.64 24.64 
      0 0 1 24.6 24.6 24.64 24.64 0 0 1-24.6 24.61zm0-47.45A22.87 22.87 0 0 0 2.26 24.68 22.87 22.87 0 0 0 25.1 47.52a22.87 22.87 0 0 0 
      22.84-22.84A22.87 22.87 0 0 0 25.1 1.83z"></path> <path d="M22.84 30.53l-4.44-4.45a.88.88 0 1 1 1.24-1.24l3.2 3.2 8.89-8.9a.88.88 
      0 1 1 1.25 1.26L22.84 30.53z"></path> </svg>
      <span className={`${styles.payments__text} ${styles.payments__margin}`}>Обязательно продублируйте свой логин STEAM в комментарий к переводу!!!</span>
      <span className={styles.payments__text}>Перевод по номеру карты:</span>
      <span className={`${styles.payments__text} ${styles.payments__colortext} ${styles.payments__marginmin}`}>{card_number}</span>
      <span className={`${styles.payments__text} ${styles.payments__colortext}`}>{card_bank}</span>
      <span className={`${styles.payments__text} ${styles.payments__margin}`}>Обязательно продублируйте свой логин STEAM в комментарий к переводу!!!</span>
      <span className={styles.payments__text}>Пополнение через СБП:</span>
      <span className={`${styles.payments__text} ${styles.payments__colortext} ${styles.payments__marginmin}`}>{phone_number}</span>
      <span className={`${styles.payments__text} ${styles.payments__colortext}`}>{phone_bank}</span>
      <span className={`${styles.payments__text} ${styles.payments__margin}`}>Если ваш баланс не был пополнен, свяжитесь с нами в ТГ:</span>
      <a href="https://t.me/Vezdepaycom" className={`${styles.payments__link} ${styles.payments__marginmin}`}>@Vezdepaycom</a>
    </div>
  );
};

