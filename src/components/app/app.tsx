import React, { useState, useEffect, useReducer } from 'react';
import styles from "./app.module.css";
import InputList from '../input_list/InputList';
import { PAYMENT_METHOD } from '../../utils/constants';
import { TelegramIcon, VkIcon } from '../icons';
import { useForm } from '../hooks/useForm';
import { useModal } from '../hooks/useModal';
import { Loader } from '../loader/loader';
import { apiGetLinkNicepay, apiGetCount, apiGetSettings, apiSendRequestCard, apiSendResponseCard, apiSendRequestCrypto, apiGetLinkLava, apiGetLinkFk } from '../../utils/api';
import { initialState, requestReducer } from '../../services/requestReducer';
import { areAllValuesTrue, isHttpsUrl } from '../../utils/utils';
import { Calc } from '../calc/calc';
import { InputName, ModalSection } from '../../utils/constants';
import { Footer } from '../footer/footer';
import { TSettings, TCount, TOrder, TMethod } from '../../types/types';
import { ModalComponent } from '../modal/modal_component';
import { Rating } from '../rating/rating';

function App() {

  const [payMethod, setPayMethod] = useState(PAYMENT_METHOD[0].value);
  const [agree, setAgree] = useState<boolean>(false);
  const [request, dispatchRequest] = useReducer(requestReducer, initialState);
  const [link, setLink] = useState<string | undefined>('');
  const [buttonText, setButtonText] = useState<string | undefined>('Пополнить');
  const [settings, setSettings] = useState<TSettings | undefined>();
  const [count, setCount] = useState<TCount | undefined>();
  const [order, setOrder] = useState<TOrder | undefined>();
  const [resultAmount, setResultAmount] = useState<number>(0);
  const [modalSection, setModalSection] = useState<ModalSection>(ModalSection.CONTACTS);

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
  }, [setValues]);

  const onMethodClick = (item: TMethod): void => {
    setPayMethod(item.value);
    item.value && settings && setSettings({
      ...settings,
      pay_method: item.value
    });
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
  }, [values,request.successSettings,settings,validation]);

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
      if (payMethod === 'crypto') {
        setModalSection(ModalSection.CRYPTO);
        apiSendRequestCrypto(values, resultAmount, dispatchRequest, setButtonText);
        openModal();
      } else if (settings.name === 'nicepay') {
        apiGetLinkNicepay(values, resultAmount, dispatchRequest, setLink, setButtonText);
      } else if (settings.name === 'sbp') {
        setModalSection(ModalSection.PAYMENT);
        apiSendRequestCard(values, resultAmount, dispatchRequest, setOrder, setButtonText);
        openModal();
      } else if (settings.name === 'lava') {
        apiGetLinkLava(values, resultAmount, dispatchRequest, setLink, setButtonText);
      } else if (settings.name === 'freekassa') {
        apiGetLinkFk(values, resultAmount, dispatchRequest, setLink, setButtonText);
      }
    }
  }

  const handleApprove = () => {
    order && apiSendResponseCard(order, dispatchRequest, setButtonText);
  }

  const onAgreeStringClick = () => {
    setModalSection(ModalSection.AGREEMENT);
    openModal();
  }

  const onFaqStringClick = () => {
    setModalSection(ModalSection.FAQ);
    openModal();
  }

  useEffect(() => {
    if (request.successLink && link && isHttpsUrl(link)) {
      localStorage.setItem('payment', JSON.stringify(values));
      window.location.href = link;
    }
  }, [link,request.successLink,values]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>VEZDEPAY</h1>
        <div className={styles.header__socials}>
          <a href="https://vk.com/topic-227183820_53115795" target="_blank" rel="noreferrer" style={{ cursor: 'pointer' }}>{VkIcon({ type: 'socials' })}</a>
          <a href="https://t.me/Vezdepaycom" target="_blank" rel="noreferrer" style={{ cursor: 'pointer', marginTop: '2px' }}>{TelegramIcon({ type: 'socials' })}</a>
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
            return <li className={`${styles.payment} ${item.value === payMethod ? styles.payment__active : ""}`} key={index}>
              <button className={styles.payments__icon} onClick={() => onMethodClick(item)} style={{ backgroundImage: `url(${item.url})` }}></button>
              {item.value === payMethod && <span className={styles.payment__checkmark}>✔</span>}
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
      <Footer onClickElement={openModal} setModalSection={setModalSection} />
      <img src={require('../../images/men.png')} alt={'a character from the game'} className={styles.men} />
      {<ModalComponent
        active={isModalOpen}
        setActive={openModal}
        setClose={closeModal}
        section={modalSection}
        settings={settings}
        handleApprove={handleApprove}
      />}

    </div>
  );
}

export default App;
