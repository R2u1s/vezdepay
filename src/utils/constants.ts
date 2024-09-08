export const DEFAULT_BUTTON_LIST = 'Получить список сотрудников';
export const DEFAULT_BUTTON_ADD = 'Добавить сотрудника';

export enum Action {

  REQUEST_SETTINGS = 'REQUEST_SETTINGS',
  REQUEST_LINK = 'REQUEST_LIST',
  REQUEST_PAYMENT = 'REQUEST_ADD',

  SUCCESS_SETTINGS = 'SUCCESS_SETTINGS',
  SUCCESS_LINK = 'SUCCESS_LIST',
  SUCCESS_PAYMENT = 'SUCCESS_PAYMENT',

  ERROR_SETTINGS = 'ERROR_SETTINGS',
  ERROR_LINK = 'ERROR_LINK',
  ERROR_PAYMENT = 'ERROR_PAYMENT',

  CLEAR = 'CLEAR'
}

export enum InputName {
  LOGIN = 'login',
  AMOUNT = 'amount',
  TG = 'tg',
}  

export const CALC_CONSTANTS = {
  SERVICE: 30,
  COSTS: 0.175
}

export enum ModalContent {
  PAYMENT = 'payment',
  CONTACTS = 'contacts',
  FAQ = 'faq',
  API = 'api',
  POLITIC = 'politic',
  AGREEMENT = 'agreement',
}  