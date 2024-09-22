import {FC} from "react";
import styles from './rating.module.css';
import { TRating } from "../../types/types";

export const Rating:FC<TRating> = ({count,request}) => {

  return (
    <div className={styles.rating}>
      <div className={styles.rating__flex}>
        <svg xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#ffa500"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
        <span className={styles.rating__text}>5.0</span>
      </div>
      <span className={`${styles.rating__text} ${styles.rating__text_width}`}>Пополнений: {request.requestCount ? ' ' : request.successCount ? count : '232361' }</span>
      <div className={styles.rating__flex}>
        <svg
          className={styles.rating__text_violet}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"><path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 
      23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 
      76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm400 0q36-13 58-43.5t22-68.5v-40h-80v152Z"/></svg>
        <span className={styles.rating__text_violet}>Лучшее предложение</span>
      </div>
    </div>
  );
};

