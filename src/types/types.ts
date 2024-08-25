import { Action, InputName } from "../utils/constants";

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
  costs: number
}

export type TSettingsResponse = {
  id:string,
  name: string,
  service_fee: string,
  costs: string
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
  merchant_id: string;
  secret: string;
  order_id: string;
  account: string;
  amount: number;
  currency: string;
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