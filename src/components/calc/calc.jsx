import React, { useState, useEffect } from "react";
import styles from './calc.module.css';
import { CALC_CONSTANTS } from "../../utils/constants";
import { Loader } from "../loader/loader";

export const Calc = ({ amount, loader, service_fee, costs, setResultAmount }) => {

  const [valid, setValid] = useState(false);

  const [calc, setCalc] = useState({
    pay: 0,
    get: 0,
    service: CALC_CONSTANTS.SERVICE,
    costs: 0
  });

  useEffect(() => {
    if (service_fee !== undefined && costs !== undefined) {
      const newGet = parseFloat(amount);
      const newCosts = (newGet + service_fee) * costs;
      const newPay = newCosts + newGet + service_fee;
      setCalc({
        pay: newPay,
        get: newGet,
        service: service_fee,
        costs: newCosts
      });
      setResultAmount(newPay);
    }
  }, [amount, service_fee, costs, loader]);

  useEffect(() => {
    if (calc.pay > 0 && calc.get > 0 && calc.service >= 0 && calc.costs >= 0) {
      setValid(true);
    }
  }, [calc]);

return (
  <section className={styles.calc}>
    {loader && <div className={styles.calc__loader}><Loader /></div>}
    <div className={styles.calc__string}>
      <span className={styles.calc__text}>Заплатите:</span>
      <div className={styles.calc__line}></div>
      <span className={styles.calc__price}>{valid ? (amount ? calc.pay.toFixed(2) : 0) : 0} ₽</span>
    </div>
    <div className={styles.calc__string}>
      <span className={styles.calc__text}>Получите на баланс Steam:</span>
      <div className={styles.calc__line}></div>
      <span className={styles.calc__price}>{valid ? (amount ? calc.get.toFixed(2) : 0) : 0} ₽</span>
    </div>
    <div className={styles.calc__string}>
      <span className={styles.calc__text}>Комиссия сервиса:</span>
      <div className={styles.calc__line}></div>
      <span className={styles.calc__price}>{valid ? (amount ? calc.service.toFixed(2) : 0) : 0} ₽</span>
    </div>
    <div className={styles.calc__string}>
      <span className={styles.calc__text}>Банковские издержки:</span>
      <div className={styles.calc__line}></div>
      <span className={styles.calc__price}>{valid ? (amount ? calc.costs.toFixed(2) : 0) : 0} ₽</span>
    </div>
  </section>
);
};

