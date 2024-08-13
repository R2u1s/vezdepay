import React, { useState, useEffect } from 'react';
import styles from "./app.module.css";
import InputList from '../input_list/InputList';
import { paymentMethods } from '../constants/payments';
import { TelegramIcon, VkIcon } from '../icons';
import { useForm } from '../hooks/useForm';
import { Loader } from '../loader/loader';

export const INPUT_LOGIN = 'login';
export const INPUT_AMOUNT = 'amount';
export const INPUT_TG = 'tg';

export const calcConstants = {
  service: 30,
  costs: 0.175
}

function App() {

  const [payMethod, setPayMethod] = useState(paymentMethods[0].name);
  const [agree, setAgree] = useState<boolean>(false);
  const [request, setRequest] = useState<boolean>(false);

  const { values, handleChange, setValues } = useForm({
    [INPUT_LOGIN]: '',
    [INPUT_AMOUNT]: '',
    [INPUT_TG]: ''
  });

  const [calc, setCalc] = useState({
    pay: 0,
    get: 0,
    service: calcConstants.service,
    costs: 0
  });

  useEffect(() => {
    const newGet = parseInt(values[INPUT_AMOUNT], 10);
    const newCosts = (newGet + calcConstants.service) * calcConstants.costs;
    const newPay = newCosts + newGet + calcConstants.service;

    setCalc({
      pay: newPay,
      get: newGet,
      service: calcConstants.service,
      costs: newCosts
    });
  }, [values]);

  const onClick = (name: string): void => {
    setPayMethod(name);
  }

  const onAgreeClick = (): void => {
    setAgree(prev => !prev);
  }

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRequest(prev => !prev);
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>VEZDEPAY</h1>
        <div className={styles.header__socials}>
          <div style={{ cursor: 'pointer' }}>{VkIcon({ type: 'socials' })}</div>
          <div style={{ cursor: 'pointer', marginTop: '2px' }}>{TelegramIcon({ type: 'socials' })}</div>
        </div>
      </header>
      <section className={styles.content}>
        <Loader />
        <h2 className={styles.subtitle}>Пополняй Steam</h2>
        <p className={styles.paragraph}>При первом пополнении,<br />рекомендуем ознакомиться с разделом FAQ</p>

        <InputList values={values} handleChange={handleChange} setValues={setValues} />

        <div className={styles.calc}>
          <div className={styles.calc__string}>
            <span className={styles.calc__text}>Заплатите:</span>
            <div className={styles.calc__line}></div>
            <span className={styles.calc__price}>{values[INPUT_AMOUNT] ? calc.pay : 0} ₽</span>
          </div>
          <div className={styles.calc__string}>
            <span className={styles.calc__text}>Получите на баланс Steam:</span>
            <div className={styles.calc__line}></div>
            <span className={styles.calc__price}>{values[INPUT_AMOUNT] ? calc.get : 0} ₽</span>
          </div>
          <div className={styles.calc__string}>
            <span className={styles.calc__text}>Комиссия сервиса:</span>
            <div className={styles.calc__line}></div>
            <span className={styles.calc__price}>{values[INPUT_AMOUNT] ? calc.service : 0} ₽</span>
          </div>
          <div className={styles.calc__string}>
            <span className={styles.calc__text}>Банковские издержки:</span>
            <div className={styles.calc__line}></div>
            <span className={styles.calc__price}>{values[INPUT_AMOUNT] ? calc.costs : 0} ₽</span>
          </div>
        </div>

        <p className={styles.text}>Выбор платежной системы</p>

        <ul className={styles.payments}>
          {paymentMethods.map((item, index) => {
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

        <form onSubmit={handleSubmit}>
          <button type='submit' className={styles.submit}>{request ? <Loader /> : 'Пополнить'}</button>
        </form>

      </section>
      <img src={require('../../images/men.png')} className={styles.men} />

    </div>
  );
}

export default App;
