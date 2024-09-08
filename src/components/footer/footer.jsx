import React, { useState, useEffect } from "react";
import styles from './footer.module.css';
import { ModalContent } from "../../utils/constants";

export const Footer = ({onClickElement,setModalContent}) => {

  const onClickHandler = (content) => {
    onClickElement();
    setModalContent(content);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__nav}>
        <h3 className={styles.footer__element} onClick={() => {onClickHandler(ModalContent.CONTACTS)}}>Контакты</h3>
        <h3 className={styles.footer__element} onClick={() => {onClickHandler(ModalContent.FAQ)}}>FAQ</h3>
        <h3 className={styles.footer__element} onClick={() => {onClickHandler(ModalContent.API)}}>API</h3>
        <h3 className={styles.footer__element} onClick={() => {onClickHandler(ModalContent.POLITIC)}}>Политика конфиденциальности</h3>
        <h3 className={styles.footer__element} onClick={() => {onClickHandler(ModalContent.AGREEMENT)}}>Соглашение</h3>
      </div>
      <p className={styles.footer__aff}>This site is not affiliated with Valve or Steam. Steam and the Steam logo are trademarks of Valve Corporation. All other trademarks are property of their respective owners.</p>
    </footer>
  );
};

