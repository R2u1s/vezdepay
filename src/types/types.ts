import { Action, InputName, ModalContent } from "../utils/constants";

export type TInputValues = Record<InputName, string>;

export type TRequest = {
  requestSettings: boolean,
  requestLink: boolean,
  requestPayment: boolean,
  successSettings: boolean,
  successLink: boolean,
  successPayment: boolean,
  errorSettings: boolean,
  errorLink:boolean,
  errorPayment:boolean,
}

export type TAction = Action;

export type TSettings = {
  id:string,
  name: string,
  service_fee: number,
  costs: number,
  card_number?: string,
  card_bank?: string,
  phone_number?: string,
  phone_bank?: string
}

export type TSettingsResponse = {
  id:string,
  name: string,
  service_fee: string,
  costs: string,
  card_number: string,
  card_bank: string,
  phone_number: string,
  phone_bank: string
}

export interface ILinkResponse {
  status: string,
  data: {
      payment_id?: string,
      amount?: number,
      currency?: string,
      link?: string,
      expired?: string,
      message?: string
  }
}

export interface ILinkPayload {
  order_id: string;
  account: string;
  amount: number;
  description: string;
  customer: string;
}
export type TButtonText = string

export type TLink = string

export type TErrorInput = Record<InputName, boolean>;

export interface TModal {
  active: boolean;
  setActive?: () => void;
  setClose: () => void;
  children?: React.ReactNode;
}

export interface TModalContent extends TModal {
  content: ModalContent,
  settings: TSettings | undefined
}