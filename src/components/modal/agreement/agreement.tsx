import FC from "react";
import styles from './agreement.module.css';

export const Agreement = () => {

  return (
    <div className={styles.agreement}>
      <h3 className={styles.agreement__title}>Пользовательское соглашение</h3>
      <div className={styles.agreement__container}>
        <span className={styles.agreement__text}>ВНИМАНИЕ: Пожалуйста, ознакомьтесь с настоящим пользовательским соглашением до начала использования
          сайта vezdepay.com и его программных средств. Использование функций на сайте будет означать ваше согласие с условиями настоящего
          пользовательского соглашения. Если Вы не согласны с условиями настоящего пользовательского соглашения, не используйте функции на сайте
          vezdepay.com и не используйте его программные средства. Редакция от 7.08.2021</span>
        <span className={styles.agreement__text}>Vezdepay с одной стороны и лицо, акцептовавшее оферту, размещенную в сети Интернет по постоянному
          адресу https://vezdepay.com/agreement, с другой стороны, заключили настоящее пользовательское соглашение о нижеследующем.</span>
        <h4 className={styles.agreement__subtitle}>1 Термины и определения</h4>
        <span className={styles.agreement__text}>1.1 В настоящем пользовательском соглашении, если из текста прямо не вытекает иное, следующие
          термины будут иметь указанные ниже значения:</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>«Steam», «служба Steam»</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>Онлайновая услуга, предлагаемая корпорацией Valve, являющейся правообладателем объектов Инвентаря.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>«Владелец»</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>VEZDEPAY</span>

        <span className={styles.agreement__text}>«Пользователь»</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>Физическое лицо, имеющее аккаунт Steam, заключившее с Владельцем Соглашение.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>«Сайт»</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>Составные произведения, представляющие собой совокупность информации, текстов,
          графических элементов, дизайна, изображений, фото и видеоматериалов, программ для ЭВМ, иных результатов интеллектуальной деятельности, за
          исключением Инвентаря, содержащихся в информационной системе, обеспечивающей доступность такой информации в сети Интернет в пределах доменной
          зоны steambalance.cc.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>«Соглашение»</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>Настоящее пользовательское соглашение.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>«Стороны»</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>Владелец и Пользователь.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>Все остальные термины и определения, встречающиеся в тексте Соглашения,
          толкуются Сторонами в соответствии с законодательством Эстонской Республики и сложившимися в сети Интернет обычными правилами толкования
          соответствующих терминов. Названия заголовков (статей) Соглашения предназначены исключительно для удобства пользования текстом Соглашения и
          буквального юридического значения не имеют.</span>
        <h4 className={styles.agreement__subtitle}>2 Заключение Соглашения</h4>
        <span className={styles.agreement__text}>2.1Текст Соглашения, постоянно размещенный в сети Интернет по сетевому адресу
          https://steambalance.cc/agreement и доступный при регистрации (авторизации) на Сайте, содержит все существенные условия
          Соглашения и является предложением Владельца заключить Соглашение с любым полностью дееспособным третьим лицом, использующим
          Сайт, на указанных в тексте Соглашения условиях. Таким образом, текст Соглашения является публичной офертой в соответствии с
          законодательством Эстонской Республики.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>2.2 Надлежащим акцептом настоящей оферты считается последовательное
          осуществление третьим лицом, следующих действий:</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>2.2.1 Ознакомление с условиями Соглашения;</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>2.2.2 Проставление символа в специальном поле под заголовком «Я принимаю условия пользовательского соглашения»;</span>
        <h4 className={styles.agreement__subtitle}>3 Предмет Соглашения</h4>
        <span className={styles.agreement__text}>3.1 Владелец предоставляет Пользователю безвозмездную простую (неисключительную) лицензию на использование Сайта и его программных средств по их прямому назначению, как то предусмотрено явными пользовательскими функциями Сайта и Личного кабинета;</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>3.2 Пользователю запрещается:</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>3.2.1 обходить технические ограничения, установленные на Сайте.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>3.2.2 изучать технологию, декомпилировать или дизассемблировать Сайт, за исключением случаев, прямо предусмотренных законодательством Эстонской Республики;</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>3.2.3 создавать копии экземпляров Сайта, а также их внешнего оформления (дизайна);</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>3.2.4 изменять Сайт, каким бы то ни было способом;</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>3.2.5 совершать действия, направленные на изменение функционирования и работоспособности Сайта;</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>3.2.6 осуществлять указанные выше действия в отношении любой части Сайта.</span>
        <h4 className={styles.agreement__subtitle}>4 Функции Сайта</h4>
        <span className={styles.agreement__text}>4.1 Пользователь посредством Сайта имеет возможность пополнять свой личный аккаунт Steam.</span>
        <h4 className={styles.agreement__subtitle}>5 Персональные данные</h4>
        <span className={styles.agreement__text}>5.1 Пользователь дает свое согласие Владельцу на обработку информации, в том числе, персональных
          данных Пользователя, предоставленных при использовании Сайта, а именно данных, указанные в аккаунте Пользователя в Steam.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>5.2 Обработка персональных данных означает запись, систематизацию,
          накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ),
          в том числе трансграничную, обезличивание, блокирование, удаление, уничтожение персональных данных, не подпадающих под специальные
          категории, на обработку которых, согласно действующему законодательству Эстонской Республики, требуется письменное согласие Пользователя.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>5.3 Обработка персональных данных производится в целях исполнения
          Сторонами обязательств по Соглашению, регистрации Пользователя на Сайте, приобретения лицензии на использование Кейса, получения Инвентаря,
          направления на адрес электронной почты Пользователя сообщений информационного и иного характера.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>5.4 Пользователь может в любое время отозвать согласие на обработку
          персональных данных, направив Владельцу соответствующее письменное уведомление на адрес, указанный в пункте 1.1 Соглашения, заказным
          письмом с уведомлением о вручении. При этом Пользователь понимает, что такой отзыв означает прекращение действия Соглашения. Владелец
          вправе продолжить обработку персональных данных Пользователя в предусмотренных законом случаях.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>5.5 Дополнительные или иные положения в отношении обработки
          персональных данных могут содержаться в соответствующем документе, размещенном или размещаемом на Сайте. В случае, противоречия
          положений такого документа положениям настоящего раздела применяются положения документа.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>5.6 Пользователь дает согласие на получение рекламных материалов
          от Владельца, его аффилированных лиц либо от иных лиц по поручению Владельца на адрес электронной почты, указанный Пользователем при
          регистрации в аккаунте Steam. Согласие на получение рекламных материалов может быть отозвано Пользователем в любое время путем направления Владельцу соответствующего письменного уведомления на адрес, указанный в пункте 9.3.1 Соглашения, либо путем совершения действий, указанных в сообщениях (электронных письмах), содержащих такие материалы.</span>
        <h4 className={styles.agreement__subtitle}>6 Ограничение ответственности</h4>
        <span className={styles.agreement__text}>6.1 Владелец не отвечает за убытки Пользователя, возникшие в результате неправомерных действий
          третьих лиц, в том числе связанных с неправомерным доступом к Личному кабинету. Владелец не несет ответственность за убытки, причиненные
          Пользователю в результате разглашения третьим лицам учетных данных, необходимых для доступа к Личному кабинету, произошедшего не по вине Владельца.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>6.2 Сайт и его программные средства предоставляются «Как есть». На
          Пользователе лежит риск использования Сайта. Владелец, операторы проводной и беспроводной связи, по сетям которых предоставляется доступ
          к Сайту, аффилированные лица, поставщики, агенты Владельца не предоставляют каких бы то ни было гарантий в отношении Сайта.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>6.3 Владелец не гарантирует, что Сайт соответствует требованиям Пользователя,
          что доступ к Сайту будет предоставляться непрерывно, быстро, надежно и без ошибок.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>6.4 При пополнении игрового аккаунта, пользователь обязан корректно
          указать свой логин в соответствии с информацией на странице пополнения и FAQ. Администратор не несет ответственности за ошибки при вводе
          логина, или указание никнейма вместо логина, а также за возможность проведения платежа в случае таких ошибок. Средства возврату или
          переотправке на другой логин в данном случае не подлежат.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>6.5 Программно-аппаратные ошибки, как на стороне Владельца, так и
          на стороне Пользователя, приведшие к невозможности получения Пользователем доступа к Сайту являются обстоятельствами непреодолимой
          силы, и основанием освобождения от ответственности за неисполнение обязательств Владельца по Соглашению.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>6.6 Владелец вправе уступать права и переводить долги, по всем
          обязательствам, возникшим из Соглашения. Настоящим Пользователь дает свое согласие на уступку прав и перевод долга любым третьим лицам.
          О состоявшейся уступке прав и/или переводе долга Владелец информирует Пользователя, размещая соответствующую информацию на Сайте.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>6.7 Размер убытков, которые могут быть возмещены Владельцем
          Пользователю, в любом случае ограничен суммой в размере первой транзакции пользователя.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>6.8 Если иное не предусмотрено Соглашением в случае нарушения
          Пользователем условий Соглашения Владелец вправе в одностороннем порядке отказаться от исполнения Соглашения и прекратить доступ Пользователя
          к Личному кабинету. В случае если такое нарушение причинило ущерб третьим лицам, ответственность за них полностью лежит на Пользователе.</span>
        <h4 className={styles.agreement__subtitle}>7 Порядок разрешения споров</h4>
        <span className={styles.agreement__text}>7.1 Все споры, разногласия и претензии, которые могут возникнуть в связи с исполнением,
          расторжением или признанием недействительным Соглашения, Стороны будут стремиться решить путем переговоров. Сторона, у которой возникли
          претензии и/или разногласия, направляет другой Стороне сообщение с указанием возникших претензий и/или разногласий в соответствии с
          пунктом 9.1 Соглашения.</span>
        <span className={styles.agreement__text} style={{ marginTop: '0px' }}>7.2 В случае если ответ на сообщение не будет получен направившей
          сообщение Стороной в течение 30 (тридцати) рабочих дней с даты направления соответствующего сообщения, либо если Стороны не придут
          к соглашению по возникшим претензиям и/или разногласиям, спор подлежит разрешению в судебном порядке по месту нахождения Владельца.</span>
        <h4 className={styles.agreement__subtitle}>8 Заключительные положения</h4>
        <span className={styles.agreement__text}>8.1 Настоящим Стороны подтверждают, что при исполнении (изменении, дополнении, прекращении)
          Соглашения, а также при ведении переписки по указанным вопросам, допускается использование аналогов собственноручной подписи Сторон.
          Стороны подтверждают, что все уведомления, сообщения, соглашения и документы в рамках исполнения Сторонами обязательств, возникших из
          Соглашения, подписанные аналогами собственноручной подписи Сторон, имеют юридическую силу и обязательны для исполнения Сторонами. Под
          аналогами собственноручной подписи понимаются уполномоченные адреса электронной почты и учетные данные к Личному кабинету.</span>
          <span className={styles.agreement__text} style={{ marginTop: '0px' }}>8.2 Стороны признают, что все уведомления, сообщения, 
          соглашения, документы и письма, направленные с использованием уполномоченных адресов электронной почты и Личного кабинета, 
          считаются направленными и подписанными Сторонами, кроме случаев, когда в таких письмах прямо не указано обратное.</span>
          <span className={styles.agreement__text} style={{ marginTop: '0px' }}>8.3 Уполномоченным адресом электронной Владельца является <a href="mailto:moneysurfpro@gmail.com" className={styles.agreement__link}>moneysurfpro@gmail.com</a></span>
          <span className={styles.agreement__text} style={{ marginTop: '0px' }}>8.4 Стороны обязуются обеспечивать конфиденциальность сведений 
          и информации, необходимых для доступа к уполномоченному адресу электронной почты, не допускать разглашение такой информации и передачу 
          третьим лицам. Стороны самостоятельно определяют порядок ограничения доступа к такой информации.</span>
          <span className={styles.agreement__text} style={{ marginTop: '0px' }}>8.5 При использовании уполномоченных адресов электронной почты, 
          до момента получения от второй Стороны информации о нарушения режима конфиденциальности, все действия и документы, совершенные и направленные 
          с помощью уполномоченного адреса электронной почты второй Стороны, даже если такие действия и документы были совершены и направлены иными лицами, 
          считаются совершенными и направленными такой второй Стороной. В этом случае права и обязанности, а также ответственность наступают у такой второй Стороны.</span>
          <h4 className={styles.agreement__subtitle}>9 Изменение условий Соглашения</h4>
          <span className={styles.agreement__text}>9.1 Владелец вправе в одностороннем порядке изменять условия Соглашения, при этом такие изменения вступают в 
          силу в момент опубликования новой версии Соглашения в сети Интернет по адресу https://steambalance.cc/agreement</span>
          <span className={styles.agreement__text}  style={{ marginTop: '0px' }}>9.2 Продолжение использования функций Сайта будет означать согласие Пользователя 
          с условиями новой версии Соглашения. Если Пользователь не согласен с условиями новой версии Соглашения, он прекращает пользоваться Сайтом.</span>
          <span className={styles.agreement__text}  style={{ marginTop: '0px' }}>9.3 Во всем остальном, что не урегулировано Соглашением, Стороны 
          руководствуются действующим законодательством Эстонской Республики без учета его коллизионных норм.</span>
          <h4 className={styles.agreement__subtitle}>10 Политика оплаты и возврата</h4>
          <h4 className={styles.agreement__subtitle} style={{ fontWeight: '200' }}>10.1 Покупки:</h4>
          <span className={styles.agreement__text}>10.1.1 В рамках Сайта вы можете приобрести ограниченную, 
          персональную, непередаваемую, отзывную, исключительную, не подлежащую сублицензированию лицензию на использование цифровых объектов: 
          (а) “виртуальная валюта”, включая, но не ограничиваясь, виртуальные деньги, выраженные в виде баланса на личном аккаунте STEAM, 
          которые предназначены для Использования на площадке STEAM.</span>
          <span className={styles.agreement__text} style={{ marginTop: '0px' }}>10.1.2 Все передаваемые лицензии на приобретенную виртуальную 
          валюту доступны экстерриториально (по всему миру) на весь период использования исключительных прав в соответствии с законодательством 
          применимого права, если иное не указано в условиях приобретения таких виртуальных валют.</span>
          <span className={styles.agreement__text} style={{ marginTop: '0px' }}>10.1.3 За исключением случаев, прямо разрешенных Сайтом, вы не можете 
          продавать, погашать или иным образом отчуждать Виртуальную валюту любому физическому или юридическому лицу, включая, без ограничений, других 
          пользователей Сайта и любых третьих лиц.</span>
          <h4 className={styles.agreement__subtitle} style={{ fontWeight: '200' }}>10.2 Осуществление платежей и возвратов:</h4>
          <span className={styles.agreement__text}>10.2.1 Вы соглашаетесь оплатить все сборы и применимые налоги, банковские комиссии и другие 
          платежные услуги третьих лиц, как на вашей стороне, так и на стороне любого, кто использует ваш зарегистрированный аккаунт.</span>
          <span className={styles.agreement__text}>10.2.2 Пользователь может запросить возврат средств в случае, если средства не поступили на 
          аккаунт STEAM в течении 10 календарных дней. Во всех остальных случаях средства не подлежат возврату. Возврат может быть осуществлен 
          с удержанием комиссий платежных систем. Мы рекомендуем обратиться в нашу Службу Поддержки, если у вас возникли какие-либо проблемы, требующие возврата платежа.</span>
      </div>
    </div>
  );
};

