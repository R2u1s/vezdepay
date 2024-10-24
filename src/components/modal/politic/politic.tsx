import { FC } from 'react';
import styles from './politic.module.css';

export const Politic:FC<{content:string}> = ({content}) => {

  return (
    <div className={styles.politic}>
      <h3 className={styles.politic__title}>Политика конфиденциальности</h3>
      <div className={styles.politic__container}>
        {/* <span className={styles.politic__text}>Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует взаимоотношения между «Vezdepay.com» (далее — «Компания» или «Мы») и физическим лицом (далее — «Пользователь» или «Вы»), использующим интернет-ресурс Vezdepay.com (далее — «Сайт»). </span>
        <h4 className={styles.contacts__subtitle}>1. Общие положения</h4>
        <span className={styles.politic__text}>1.1. Используя Сайт, Пользователь выражает согласие с условиями настоящей Политики. </span>
        <span className={styles.politic__text}>1.2. Мы собираем и обрабатываем персональные данные в соответствии с законодательством Российской Федерации.</span>
        <h4 className={styles.contacts__subtitle}>2. Какие данные мы собираем</h4>
        <span className={styles.politic__text}>2.1. Мы можем собирать следующие данные:</span>
        <span className={styles.politic__text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;Имя и фамилия</span>
        <span className={styles.politic__text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;Контактная информация (электронная почта, телефон)</span>
        <span className={styles.politic__text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;Платежные данные (в целях выполнения транзакций)</span>
        <span className={styles.politic__text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;Другая информация, необходимая для оказания услуг.</span>
        <h4 className={styles.contacts__subtitle}>3. Цели сбора данных</h4>
        <span className={styles.politic__text}>3.1. Мы используем данные Пользователей для следующих целей:</span>
        <span className={styles.politic__text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;Оказание услуг по оплате и пополнению аккаунтов на сторонних платформах;</span>
        <span className={styles.politic__text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;Поддержка и улучшение качества обслуживания;</span>
        <span className={styles.politic__text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;Связь с Пользователем в случае необходимости;</span>
        <span className={styles.politic__text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;Выполнение законных обязательств.</span>
        <h4 className={styles.contacts__subtitle}>4. Передача данных третьим лицам</h4>
        <span className={styles.politic__text}>4.1. Мы не передаем персональные данные Пользователей третьим лицам, за исключением случаев, предусмотренных законодательством. </span>
        <h4 className={styles.contacts__subtitle}>5. Защита данных</h4>
        <span className={styles.politic__text}>5.1. Мы принимаем все разумные меры для защиты персональных данных Пользователей от несанкционированного доступа, изменения, раскрытия или уничтожения.</span>
        <span className={styles.politic__text}>5.2. Доступ к данным имеют только сотрудники, которым это необходимо для выполнения их служебных обязанностей.</span>
        <h4 className={styles.contacts__subtitle}>6. Хранение данных</h4>
        <span className={styles.politic__text}>6.1. Мы храним персональные данные только столько, сколько необходимо для достижения целей, указанных в настоящей Политике, или в соответствии с требованиями закона.</span>
        <h4 className={styles.contacts__subtitle}>7. Права пользователя</h4>
        <span className={styles.politic__text}>7.1. Пользователь имеет право запросить информацию о своих персональных данных, их изменении или удалении.</span>
        <span className={styles.politic__text}>7.2. Пользователь может в любое время отказаться от обработки своих данных, связавшись с нами по контактам, указанным на Сайте. В этом случае мы можем быть вынуждены прекратить оказание услуг.</span>
        <h4 className={styles.contacts__subtitle}>8. Изменения в Политике</h4>
        <span className={styles.politic__text}>8.1. Мы оставляем за собой право вносить изменения в настоящую Политику. Изменения вступают в силу с момента их публикации на Сайте.</span>
        <h4 className={styles.contacts__subtitle}>9. Заключительные положения</h4>
        <span className={styles.politic__text}>9.1. Настоящая Политика регулируется законодательством Российской Федерации.</span>
        <span className={styles.politic__text}>9.2. Вопросы, связанные с настоящей Политикой, могут быть отправлены на наш контактный email: <a href="mailto:vezdepay@gmail.com" target="_blank" className={styles.politic__link}>vezdepay@gmail.com</a></span> */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

