import React, { useState, useEffect, useReducer } from 'react';
import styles from "./app.module.css";
import InputList from '../input_list/InputList';
import { PAYMENT_METHOD } from '../constants/payments';
import { TelegramIcon, VkIcon } from '../icons';
import { useForm } from '../hooks/useForm';
import { useModal } from '../hooks/useModal';
import { Loader } from '../loader/loader';
import { apiGetLink, apiGetCount, apiGetSettings, apiSendRequestCard, apiSendResponseCard } from '../../utils/api';
import { initialState, requestReducer } from '../../services/requestReducer';
import { areAllValuesTrue, isHttpsUrl } from '../../utils/utils';
import { Calc } from '../calc/calc';
import { InputName, ModalContent } from '../../utils/constants';
import { Footer } from '../footer/footer';
import { TSettings, TCount, TOrder } from '../../types/types';
import { ModalComponent } from '../modal/modal_component';
import { Rating } from '../rating/rating';

function App() {

  const [payMethod, setPayMethod] = useState(PAYMENT_METHOD[0].name);
  const [agree, setAgree] = useState<boolean>(false);
  const [request, dispatchRequest] = useReducer(requestReducer, initialState);
  const [link, setLink] = useState<string | undefined>('');
  const [buttonText, setButtonText] = useState<string | undefined>('Пополнить');
  const [settings, setSettings] = useState<TSettings | undefined>();
  const [count, setCount] = useState<TCount | undefined>();
  const [order, setOrder] = useState<TOrder | undefined>();
  const [resultAmount, setResultAmount] = useState<number>(0);
  const [modalContent, setModalContent] = useState<ModalContent>(ModalContent.CONTACTS);

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
    };
    apiGetCount(dispatchRequest, setCount);
    apiGetSettings(dispatchRequest, setSettings, setButtonText);
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
    [InputName.LOGIN]: false,
    [InputName.AMOUNT]: false,
    [InputName.TG]: false,
    approve: false,
    check: false
  });

  useEffect(() => {
    if (validation.check && request.successSettings && settings) {
      setValidation({
        ...validation,
        [InputName.LOGIN]: values[InputName.LOGIN].length > 0,
        [InputName.AMOUNT]: values[InputName.AMOUNT].length > 0 && parseFloat(values[InputName.AMOUNT]) > settings.min_amount,
        [InputName.TG]: values[InputName.TG].length > 0,
      });
    }
  }, [values]);

  const checkInputs = (): boolean => {
    if (request.successSettings && settings) {
      setValidation({
        ...validation,
        [InputName.LOGIN]: values[InputName.LOGIN].length > 0,
        [InputName.AMOUNT]: values[InputName.AMOUNT].length > 0 && parseFloat(values[InputName.AMOUNT]) > settings.min_amount,
        [InputName.TG]: values[InputName.TG].length > 0,
        check: true
      });
      const tempValidation = {
        ...validation,
        [InputName.LOGIN]: values[InputName.LOGIN].length > 0,
        [InputName.AMOUNT]: values[InputName.AMOUNT].length > 0 && parseFloat(values[InputName.AMOUNT]) > settings.min_amount,
        [InputName.TG]: values[InputName.TG].length > 0,
        check: true
      };
      if (areAllValuesTrue(tempValidation)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (checkInputs() && request.successSettings && settings) {
      if (settings.name === 'nicepay') {
        apiGetLink(values, resultAmount, dispatchRequest, setLink, setButtonText);
      }
      if (settings.name === 'sbp') {
        setModalContent(ModalContent.PAYMENT);
        apiSendRequestCard(values, resultAmount, dispatchRequest, setOrder, setButtonText);
        openModal();
      }
    }
  }

  const handleApprove = () => {
    order && apiSendResponseCard(order, dispatchRequest, setButtonText);
  }

  const onAgreeStringClick = () => {
    setModalContent(ModalContent.AGREEMENT);
    openModal();
  }

  const onFaqStringClick = () => {
    setModalContent(ModalContent.FAQ);
    openModal();
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
          <a href="https://t.me/Vezdepaycom" target="_blank" style={{ cursor: 'pointer', marginTop: '2px' }}>{TelegramIcon({ type: 'socials' })}</a>
        </div>
      </header>
      <main className={styles.content}>

        <h2 className={styles.subtitle}>Пополняй Steam</h2>
        {/* <p className={styles.paragraph}>При первом пополнении,<br />рекомендуем ознакомиться с разделом FAQ</p> */}
        <Rating count={count!} request={request} />
        <InputList values={values} handleChange={handleChange} validation={validation} setValidation={setValidation} settings={settings} />

        <Calc amount={values[InputName.AMOUNT]} loader={request.requestSettings} service_fee={settings?.service_fee} costs={settings?.costs} setResultAmount={setResultAmount} />

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
          <span className={styles.agree__text}>Я принимаю условия{'\u00A0'}
            <span className={styles.agree__link} onClick={onAgreeStringClick}>Пользовательского соглашения</span> и подтверждаю ознакомление с{'\u00A0'}
            <span className={styles.agree__link} onClick={onFaqStringClick}>FAQ</span>
          </span>
        </div>
        {!validation.approve && validation.check && <p className={styles.agree__error}>Нужно ознакомиться с условиями пользовательского соглашения и разделом FAQ</p>}

        <form onSubmit={handleSubmit}>
          <button
            type='submit'
            className={styles.submit}
            disabled={request.errorLink || request.errorPayment || request.errorSettings || request.requestLink || request.requestSettings || request.requestPayment}>
            <span>{request.requestLink ? <Loader /> : buttonText}</span>
          </button>
        </form>

      </main>
      <Footer onClickElement={openModal} setModalContent={setModalContent} />
      <img src={require('../../images/men.png')} className={styles.men} />
      {<ModalComponent active={isModalOpen} setActive={openModal} setClose={closeModal} content={modalContent} settings={settings} handleApprove={handleApprove} />}
    </div>

  );
}

export default App;
