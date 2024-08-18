import React, { useState, useEffect } from "react";
import styles from './footer.module.css';

export const Footer = ({onClickElement}) => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__nav}>
        <h3 className={styles.footer__element} onClick={onClickElement}>Контакты</h3>
        <h3 className={styles.footer__element}>FAQ</h3>
        <h3 className={styles.footer__element}>API</h3>
        <h3 className={styles.footer__element}>Политика конфиденциальности</h3>
        <h3 className={styles.footer__element}>Соглашение</h3>
      </div>
    </footer>
  );
};

