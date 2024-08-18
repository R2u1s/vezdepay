import React, { useState, useEffect } from "react";
import styles from './calc.module.css';
import { CALC_CONSTANTS } from "../../utils/constants";

export const Calc = ({amount}) => {

  const [calc, setCalc] = useState({
    pay: 0,
    get: 0,
    service: CALC_CONSTANTS.SERVICE,
    costs: 0
  });

  useEffect(() => {
    const newGet = parseInt(amount, 10);
    const newCosts = (newGet + CALC_CONSTANTS.SERVICE) * CALC_CONSTANTS.COSTS;
    const newPay = newCosts + newGet + CALC_CONSTANTS.COSTS;

    setCalc({
      pay: newPay,
      get: newGet,
      service: CALC_CONSTANTS.SERVICE,
      costs: newCosts
    });
  }, [amount]);

  return (
    <section className={styles.calc}>
      <div className={styles.calc__string}>
        <span className={styles.calc__text}>Заплатите:</span>
        <div className={styles.calc__line}></div>
        <span className={styles.calc__price}>{amount ? calc.pay.toFixed(2) : 0} ₽</span>
      </div>
      <div className={styles.calc__string}>
        <span className={styles.calc__text}>Получите на баланс Steam:</span>
        <div className={styles.calc__line}></div>
        <span className={styles.calc__price}>{amount ? calc.get.toFixed(2) : 0} ₽</span>
      </div>
      <div className={styles.calc__string}>
        <span className={styles.calc__text}>Комиссия сервиса:</span>
        <div className={styles.calc__line}></div>
        <span className={styles.calc__price}>{amount ? calc.service.toFixed(2) : 0} ₽</span>
      </div>
      <div className={styles.calc__string}>
        <span className={styles.calc__text}>Банковские издержки:</span>
        <div className={styles.calc__line}></div>
        <span className={styles.calc__price}>{amount ? calc.costs.toFixed(2) : 0} ₽</span>
      </div>
    </section>
  );
};

