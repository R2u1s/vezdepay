import { FC } from 'react';
import Modal from "./modal";
import { Contacts } from "./contacts/contacts";
import { TModalContent } from '../../types/types';
import { ModalContent } from '../../utils/constants';
import { Payment } from './payment/payment';
import { ApiModal } from './api_modal/api_modal';
import { Politic } from './politic/politic';
import { Agreement } from './agreement/agreement';
import { Faq } from './faq/faq';

export const ModalComponent: FC<TModalContent> = ({active, setActive, setClose, content,settings,handleApprove}) => {

  return (
    <Modal active={active} setActive={setActive} setClose={setClose}>
      {content === ModalContent.PAYMENT && <Payment settings={settings} handleApprove={() => {handleApprove();setClose();}} />}
      {content === ModalContent.CONTACTS && <Contacts />}
      {content === ModalContent.API && <ApiModal />}
      {content === ModalContent.POLITIC && <Politic />}
      {content === ModalContent.AGREEMENT && <Agreement />}
      {content === ModalContent.FAQ && <Faq />}
    </Modal>
  );
};


