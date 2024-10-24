import { FC } from 'react';
import styles from './agreement.module.css';

export const Agreement:FC<{content:string}> = ({content}) => {

  return (
    <div className={styles.agreement}>
      <h3 className={styles.agreement__title}>Пользовательское соглашение</h3>
      <div className={styles.agreement__container}>
        {/*         <h4 className={styles.agreement__subtitle}>1. Общие положения</h4>
        <span className={styles.agreement__text}>1.1. Использование Сайта означает ваше согласие с условиями настоящего Соглашения. </span>
        <span className={styles.agreement__text}>1.2. Компания предоставляет услуги по оплате различных онлайн-сервисов и пополнению аккаунтов на платформах (Steam, Spotify, Netflix, EA Games, Playstation Store, Nintendo и других). </span>
        <span className={styles.agreement__text}>1.3. Компания выступает посредником и не несет ответственности за качество или предоставление услуг сторонними сервисами, для которых производится оплата. </span>
        <h4 className={styles.agreement__subtitle}>2. Права и обязанности сторон</h4>
        <span className={styles.agreement__text}>2.1. Права Пользователя:</span>
        <span className={styles.agreement__text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;Использовать Сайт для оплаты и пополнения аккаунтов на поддерживаемых платформах.</span>
        <span className={styles.agreement__text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;Обращаться в техническую поддержку по вопросам работы Сайта и предоставляемых услуг.</span>
        <span className={styles.agreement__text}>2.2. Обязанности Пользователя:</span>
        <span className={styles.agreement__text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;Предоставлять достоверную информацию при регистрации и совершении операций на Сайте.</span>
        <span className={styles.agreement__text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;Использовать Сайт в соответствии с действующими законами и нормативными актами.</span>
        <span className={styles.agreement__text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;Не предпринимать попыток взлома или иных действий, направленных на нарушение работы Сайта.</span>
        <h4 className={styles.agreement__subtitle}>3. Платные услуги</h4>
        <span className={styles.agreement__text}>3.1. Компания взимает комиссию за предоставление услуг по оплате и пополнению аккаунтов. </span>
        <span className={styles.agreement__text}>3.2. Все платежи, осуществляемые через Сайт, окончательные и не подлежат возврату, за исключением случаев, предусмотренных законодательством.</span>
        <h4 className={styles.agreement__subtitle}>4. Ответственность сторон</h4>
        <span className={styles.agreement__text}>4.1. Компания не несет ответственности за работу сторонних сервисов, для которых производится оплата. </span>
        <span className={styles.agreement__text}>4.2. Компания не гарантирует бесперебойную работу Сайта и оставляет за собой право приостанавливать его работу для проведения технических работ. </span>
        <span className={styles.agreement__text}>4.3. В случае выявления мошеннических действий с вашей стороны, доступ к Сайту может быть ограничен без предварительного уведомления.</span>
        <h4 className={styles.agreement__subtitle}>5. Сбор и обработка персональных данных</h4>
        <span className={styles.agreement__text}>5.1. Для оказания услуг Компания может собирать персональные данные (например, имя, контактная информация и платежные данные).</span>
        <span className={styles.agreement__text}>5.2. Персональные данные обрабатываются в соответствии с Политикой конфиденциальности, которая является неотъемлемой частью настоящего Соглашения.</span>
        <h4 className={styles.agreement__subtitle}>6. Изменения в Соглашении</h4>
        <span className={styles.agreement__text}>6.1. Компания оставляет за собой право изменять условия настоящего Соглашения в одностороннем порядке. Изменения вступают в силу с момента их публикации на Сайте.</span>
        <h4 className={styles.agreement__subtitle}>7. Заключительные положения</h4>
        <span className={styles.agreement__text}>7.1. Настоящее Соглашение регулируется действующим законодательством. </span>
        <span className={styles.agreement__text}>7.2. Если какое-либо положение Соглашения будет признано недействительным, остальные положения остаются в силе.</span> */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

