import { Action, InputName, ModalSection, PAYMENT_METHOD } from "../utils/constants";

export type TInputValues = Record<InputName, string>;

export type TRequest = {
  requestSettings: boolean,
  requestLink: boolean,
  requestPayment: boolean,
  requestCount: boolean,
  requestApprove: boolean,
  successSettings: boolean,
  successLink: boolean,
  successPayment: boolean,
  successCount: boolean,
  successApprove: boolean,
  errorSettings: boolean,
  errorLink:boolean,
  errorPayment:boolean,
  errorCount:boolean,
  errorApprove:boolean
}

export type TAction = Action;

export type TContent = Record<string,string>;

export type TSettings = {
  id:string,
  name: string,
  service_fee: number,
  costs: number,
  card_number?: string,
  card_bank?: string,
  phone_number?: string,
  phone_bank?: string,
  min_amount: number,
  pay_method?: string,
  content?: TContent
}

export type TCount = number;

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
  section: ModalSection,
  settings: TSettings | undefined,
  handleApprove: () => void
}

export type TRating = {
  count:TCount,
  request:TRequest
}

export interface TCardRequestPayload {
  order_id: string,
  login: string,
  amount: number,
  contact: string,
}

export interface TFkRequestPayload extends TCardRequestPayload {
  ip: string,
}

export interface TOrder extends TCardRequestPayload {};

export interface TCardResponsePayload extends TCardRequestPayload {};

export type TMethod = {
  name:string,
  url:string,
  value:string
}