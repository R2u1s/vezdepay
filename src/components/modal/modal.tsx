import { FC, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '../icons/close-icon';
import { TModal } from '../../types/types';

const modalRoot = document.getElementById("modal");

const Modal: FC<TModal> = ({ active, setClose, children }) => {

  const escFunction: (event: KeyboardEvent) => void = useCallback((event) => {
    if (event.key === "Escape") {
      setClose();
    }
  }, []);

  useEffect(() => {
    if (active) {
      document.addEventListener("keydown", escFunction);
    }
    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [active]);

  return ReactDOM.createPortal(
    (
      <div className={active ? `${styles.modalOverlay} ${styles.modalOverlay__visibility_active}` : `${styles.modalOverlay}`} onClick={setClose}>
        <div className={active ? `${styles.modal__container} ${styles.modal__contVisibility_active}` : `${styles.modal__container}`} onClick={(e) => e.stopPropagation()}>
          <button className={styles['modal__close-button']} onClick={setClose}>
            <CloseIcon type="inputs" />
          </button>
          {children}
        </div>
      </div>
    ), modalRoot!
  );
}

export default Modal;