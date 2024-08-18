import { Action, InputName } from "../utils/constants";

export type TInputValues = Record<InputName, string>;

export type TRequest = {
  requestLink: boolean,
  requestPayment: boolean,
  successLink: boolean,
  successPayment: boolean,
  errorLink:boolean,
  errorPayment:boolean,
}

export type TAction = Action;

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