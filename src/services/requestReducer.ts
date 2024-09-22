import { TRequest, TAction } from "../types/types";
import { Action } from "../utils/constants";

export const initialState: TRequest = {
  requestSettings: false,
  requestLink: false,
  requestPayment: false,
  requestCount: false,
  requestApprove: false,
  successSettings: false,
  successLink: false,
  successPayment: false,
  successCount: false,
  successApprove: false,
  errorSettings: false,
  errorLink: false,
  errorPayment: false,
  errorCount: false,
  errorApprove: false
}

export function requestReducer(state: TRequest, action: TAction): TRequest {

  switch (action) {

    case Action.REQUEST_LINK:
      return {
        ...state,
        requestLink: true
      };


    case Action.SUCCESS_LINK:
      return {
        ...state,
        requestLink: false,
        successLink: true,
        errorLink: false
      };

    case Action.ERROR_LINK:
      return {
        ...state,
        requestLink: false,
        successLink: false,
        errorLink: true
      };

    case Action.REQUEST_PAYMENT:
      return {
        ...state,
        requestPayment: true
      };

    case Action.SUCCESS_PAYMENT:
      return {
        ...state,
        requestPayment: false,
        successPayment: true,
        errorPayment: false
      };

    case Action.ERROR_PAYMENT:
      return {
        ...state,
        requestPayment: false,
        successPayment: false,
        errorPayment: true
      };

    case Action.REQUEST_SETTINGS:
      return {
        ...state,
        requestSettings: true
      };

    case Action.SUCCESS_SETTINGS:
      return {
        ...state,
        requestSettings: false,
        successSettings: true,
        errorSettings: false
      };

    case Action.ERROR_SETTINGS:
      return {
        ...state,
        requestSettings: false,
        successSettings: false,
        errorSettings: true
      };

    case Action.REQUEST_COUNT:
      return {
        ...state,
        requestCount: true
      };

    case Action.SUCCESS_COUNT:
      return {
        ...state,
        requestCount: false,
        successCount: true,
        errorCount: false
      };

    case Action.ERROR_COUNT:
      return {
        ...state,
        requestCount: false,
        successCount: false,
        errorCount: true
      };

    case Action.REQUEST_APPROVE:
      return {
        ...state,
        requestApprove: true
      };

    case Action.SUCCESS_APPROVE:
      return {
        ...state,
        requestApprove: false,
        successApprove: true,
        errorApprove: false
      };

    case Action.ERROR_APPROVE:
      return {
        ...state,
        requestApprove: false,
        successApprove: false,
        errorApprove: true
      };

    case Action.CLEAR:
      return initialState;

    default:
      throw new Error(`Wrong value`);
  }
}