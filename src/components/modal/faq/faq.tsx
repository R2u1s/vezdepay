import FC from "react";
import styles from './faq.module.css';

export const Faq = () => {

  return (
    <div className={styles.faq}>
      <h3 className={styles.faq__title}>FAQ</h3>
      <div className={styles.faq__container}>
        <h4 className={styles.faq__subtitle}>ВАЖНО! Требования к аккаунту</h4>
        <span className={styles.faq__text}>Есть перечень требований к аккаунту, соответствие которых позволит нам совершить пополнение баланса: 
        Страной Вашего аккаунта должна одна из стран СНГ (Казахстан, Узбекистан, Кыргыстан, Россия и т.д). Для аккаунтов со странами Китай, Турция 
        и другими, не входящими в СНГ странам — пополнение недоступно.</span>
        <h4 className={styles.faq__subtitle}>Прочитайте этот гайд при первом пополнении нового аккаунта Steam</h4>
        <span className={styles.faq__text}>Если вы пополняете аккаунт на котором до этого не было финансовых операций, его регион может измениться 
        на Казахстан, Узбекистан или другой похожий регион, а валюта на CIS $ (или другие).<br />
        Чтобы этого избежать и сохранить тот регион (страну) из которой Вы заходите в аккаунт, следуйте этой инструкции:<br /><br />
        1. Авторизуйтесь в Steam в браузере или программе.<br />
        2. Добавьте на свой аккаунт минимум две бесплатные игры. Например PUBG и Dota 2. Рекомендуем добавлять игры, используя библиотеку Steam в приложении на смартфоне.<br />
        3. Наиграйте не менее 2-3 часов в добавленной игре.<br />
        4. Не забудьте выключить VPN. Получение бесплатных игр на Steam и должно происходить в домашнем регионе.<br /><br />
        PROFIT. Ваш аккаунт даже после первого пополнения будет иметь валюту домашнего региона, а значит все цены на игры будут 
        показываться как для домашнего региона. (данный способ не является 100% гарантом и в некоторых случаях всё же может не сработать. 
        Для первого пополнения рекомендуем попробовать пополнить баланс на минимальную сумму)<br /><br />
        P.S: Используя этот способ для страны Россия, Вы так же получаете региональные ограничения связанные с РФ аккаунтами. 
        Некоторые игры из библиотеки Steam будут недоступны для покупки в этом регионе.</span>
        <h4 className={styles.faq__subtitle}>У меня новый(свежесозданный) или ранее не пополнявшийся аккаунт</h4>
        <span className={styles.faq__text}>Пожалуйста, перед первым пополнением нового/свежесозданного аккаунта ознакомьтесь с пунктом нашего FAQ<br />
        В противном случае, валюта аккаунта может смениться на одну из списка ($, ₸, € и другие).<br />
        В этом случае цены на внутренние товары Steam будут пересчитываться в валюту аккаунта ($, ₸, € и другие), а не ₽ (рубли). Учтите это при пополнении!</span>
        <h4 className={styles.faq__subtitle}>Пришла сумма меньше, чем в калькуляторе. Что делать?</h4>
        <span className={styles.faq__text}>Для пополнения нам приходится конвертировать средства в разные валюты.
        Иногда сумма может отличаться на 1-5% от указанной.</span>
        <h4 className={styles.faq__subtitle}>Политика возврата</h4>
        <span className={styles.faq__text}>Если вы проигнорировали требования к аккаунту и все же попытались отправить себе средства, то они не дойдут.
        В этом случае Вы вправе запросить возврат в ТП.<br />
        На Qiwi-кошелек средства будут возвращены с вычетом 50р и 7% от суммы.<br />
        На Карту банка средства будут возвращены с вычетом 50р и 8% от суммы.</span>
        <h4 className={styles.faq__subtitle}>Не приходят деньги на баланс аккаунта Steam</h4>
        <span className={styles.faq__text}>Если Вы указали верно ЛОГИН (это не никнейм) и баланс Вашего аккаунта - рубли (₽), пополнение происходит моментально.<br />
        Если Вам не поступили средства на баланс в течении 10 минут, пожалуйста обратитесь в Техническую поддержку (виджет справа в углу экрана)</span>
        <h4 className={styles.faq__subtitle}>Что такое "логин"?</h4>
        <span className={styles.faq__text}>Логин — это то что вы вводите при авторизации, у каждого пользователя он уникальный, а 
        никнейм вы можете менять по своему усмотрению. Людей с ником QWERTY может быть сотни. Не перепутайте ваш логин и никнейм.</span>
      </div>
    </div>
  );
};

