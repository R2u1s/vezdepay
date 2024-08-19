import React, { useState, useEffect } from "react";
import styles from './contacts.module.css';

export const Contacts = () => {

  return (
    <div className={styles.contacts}>
      <h3 className={styles.contacts__title}>Контакты</h3>
      <h4 className={styles.contacts__subtitle}>Beneficiary</h4>
      <span className={styles.contacts__text}>VEZDEPAY.COM</span>
      <h4 className={styles.contacts__subtitle}>Reg. number</h4>
      <span className={styles.contacts__text}>1233321</span>
      <h4 className={styles.contacts__subtitle}>Beneficiary's address:</h4>
      <span className={styles.contacts__text}>Rue du Trône 100, 3rd floor, Brussels, 1050, Belgium</span>
      <a href="mailto:moneysurfpro@gmail.com" className={styles.contacts__link}>moneysurfpro@gmail.com</a>
    </div>
  );
};

