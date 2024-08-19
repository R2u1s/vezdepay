import React, { useState, useEffect, useReducer } from 'react';
import styles from "./app.module.css";
import InputList from '../input_list/InputList';
import { PAYMENT_METHOD } from '../constants/payments';
import { TelegramIcon, VkIcon } from '../icons';
import { useForm } from '../hooks/useForm';
import { useModal } from '../hooks/useModal';
import { Loader } from '../loader/loader';
import { apiGetLink } from '../../utils/api';
import { initialState, requestReducer } from '../../services/requestReducer';
import { areAllValuesTrue, hasEmptyValue, isHttpsUrl } from '../../utils/utils';
import { Calc } from '../calc/calc';
import { InputName } from '../../utils/constants';
import { Footer } from '../footer/footer';
import Modal from '../modal/modal';
import { Contacts } from '../modal/contacts/contacts';

function App() {

  const [payMethod, setPayMethod] = useState(PAYMENT_METHOD[0].name);
  const [agree, setAgree] = useState<boolean>(false);
  const [request, dispatchRequest] = useReducer(requestReducer, initialState);
  const [link, setLink] = useState<string | undefined>('');
  const [buttonText, setButtonText] = useState<string | undefined>('Пополнить');
  const [resultAmount, setResultAmount] = useState(0);

  const { isModalOpen, openModal, closeModal } = useModal();

  const { values, handleChange, setValues } = useForm({
    [InputName.LOGIN]: '',
    [InputName.AMOUNT]: '',
    [InputName.TG]: ''
  });

  useEffect(() => {
    const storedCart = localStorage.getItem('payment');
    if (storedCart) {
      setValues(JSON.parse(storedCart));
    }
  }, []);

  const onClick = (name: string): void => {
    setPayMethod(name);
  }

  const onAgreeClick = (): void => {
    const prev = agree;
    setValidation({
      ...validation,
      approve: !prev
    });
    setAgree(!prev);
  }

  const [validation, setValidation] = useState({
    [InputName.LOGIN]: true,
    [InputName.AMOUNT]: true,
    [InputName.TG]: true,
    approve: agree,
    check: false
  });

  const checkInputs = (): boolean => {
    setValidation({
      ...validation,
      check: true
    });
    if (areAllValuesTrue(validation)) {
      return true;
    } else {
      return false;
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    checkInputs() && apiGetLink(values, dispatchRequest, setLink, setButtonText);
  }

  useEffect(() => {
    if (request.successLink && link && isHttpsUrl(link)) {
      localStorage.setItem('payment', JSON.stringify(values));
      window.location.href = link;
    }
  }, [link]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>VEZDEPAY</h1>
        <div className={styles.header__socials}>
          <div style={{ cursor: 'pointer' }}>{VkIcon({ type: 'socials' })}</div>
          <div style={{ cursor: 'pointer', marginTop: '2px' }}>{TelegramIcon({ type: 'socials' })}</div>
        </div>
      </header>
      <main className={styles.content}>

        <h2 className={styles.subtitle}>Пополняй Steam</h2>
        <p className={styles.paragraph}>При первом пополнении,<br />рекомендуем ознакомиться с разделом FAQ</p>

        <InputList values={values} handleChange={handleChange} validation={validation} setValidation={setValidation} />

        <Calc amount={values[InputName.AMOUNT]} />

        <p className={styles.text}>Выбор платежной системы</p>

        <ul className={styles.payments}>
          {PAYMENT_METHOD.map((item, index) => {
            return <li className={`${styles.payment} ${item.name === payMethod ? styles.payment__active : ""}`} key={index}>
              <button className={styles.payments__icon} onClick={() => onClick(item.name)} style={{ backgroundImage: `url(${item.url})` }}></button>
              {item.name === payMethod && <span className={styles.payment__checkmark}>✔</span>}
              <span className={styles.payments__name}>{item.name}</span>
            </li>
          })}
        </ul>

        <div className={styles.agree}>
          <button className={`${styles.agree__checkmark} ${agree ? styles.agree__checkmark_active : ""}`} onClick={onAgreeClick}>{agree && "✔"}</button>
          <span className={styles.agree__text}>Я принимаю условия Пользовательского соглашения и подтверждаю ознакомление с FAQ
          </span>
        </div>
        {!validation.approve && validation.check && <p className={styles.agree__error}>Нужно ознакомиться с условиями пользовательского соглашения и разделом FAQ</p>}

        <form onSubmit={handleSubmit}>
          <button
            type='submit'
            className={styles.submit}
            disabled={request.errorLink || request.errorPayment || request.requestLink}>
            <span>{request.requestLink ? <Loader /> : buttonText}</span>
          </button>
        </form>

      </main>
      <Footer onClickElement={openModal} />
      <img src={require('../../images/men.png')} className={styles.men} />
      <Modal active={isModalOpen} setActive={openModal} setClose={closeModal}>
        <Contacts />
      </Modal>
    </div>
    
  );
}

export default App;
