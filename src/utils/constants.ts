export const DEFAULT_BUTTON_LIST = 'Получить список сотрудников';
export const DEFAULT_BUTTON_ADD = 'Добавить сотрудника';

export enum Action {
  REQUEST_LINK = 'REQUEST_LIST',
  REQUEST_PAYMENT = 'REQUEST_ADD',

  SUCCESS_LINK = 'SUCCESS_LIST',
  SUCCESS_PAYMENT = 'SUCCESS_PAYMENT',

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