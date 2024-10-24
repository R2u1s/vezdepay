import styles from './footer.module.css';
import { ModalSection } from "../../utils/constants";

export const Footer = ({onClickElement,setModalSection}) => {

  const onClickHandler = (section) => {
    onClickElement();
    setModalSection(section);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__nav}>
        <h3 className={styles.footer__element} onClick={() => {onClickHandler(ModalSection.CONTACTS)}}>Контакты</h3>
        <h3 className={styles.footer__element} onClick={() => {onClickHandler(ModalSection.FAQ)}}>FAQ</h3>
        <h3 className={styles.footer__element} onClick={() => {onClickHandler(ModalSection.API)}}>API</h3>
        <h3 className={styles.footer__element} onClick={() => {onClickHandler(ModalSection.POLITIC)}}>Политика конфиденциальности</h3>
        <h3 className={styles.footer__element} onClick={() => {onClickHandler(ModalSection.AGREEMENT)}}>Соглашение</h3>
      </div>
      {/* <p className={styles.footer__aff}>This site is not affiliated with Valve or Steam. Steam and the Steam logo are trademarks of Valve Corporation. All other trademarks are property of their respective owners.</p> */}
    </footer>
  );
};

