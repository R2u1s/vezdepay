import { FC } from 'react';
import Modal from "./modal";
import { Contacts } from "./contacts/contacts";
import { TModalContent } from '../../types/types';
import { ModalSection } from '../../utils/constants';
import { Payment } from './payment/payment';
import { ApiModal } from './api_modal/api_modal';
import { Politic } from './politic/politic';
import { Agreement } from './agreement/agreement';
import { Faq } from './faq/faq';
import { Crypto } from './crypto/crypto';

export const ModalComponent: FC<TModalContent> = ({active, setActive, setClose, section,settings,handleApprove}) => {

  return (
    <Modal active={active} setActive={setActive} setClose={setClose}>
      {section === ModalSection.PAYMENT && <Payment settings={settings} handleApprove={() => {handleApprove();setClose();}} />}
      {section === ModalSection.CONTACTS && settings && <Contacts content={settings.content ? settings.content.contacts : undefined} />}
      {section === ModalSection.API && settings && settings.content && <ApiModal content={settings.content.api} />}
      {section === ModalSection.POLITIC && settings && settings.content && <Politic content={settings.content.politic} />}
      {section === ModalSection.AGREEMENT && settings && settings.content && <Agreement content={settings.content.agreement} />}
      {section === ModalSection.FAQ && settings && settings.content && <Faq content={settings.content.faq} />}
      {section === ModalSection.CRYPTO && settings && settings.content && <Crypto content={settings.content.crypto} />}
    </Modal>
  );
};


