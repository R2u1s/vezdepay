import axios from "axios";
import { Dispatch, SetStateAction } from "react";

import { Action, InputName } from "./constants";
import { ILinkResponse, ILinkPayload, TInputValues, TButtonText, TLink, TSettings, TSettingsResponse } from '../types/types';
import { getCurrentDateTimeString } from "./utils";

import { CALC_CONSTANTS } from "./constants";

const URL = "https://nicepay.io/public/api/payment";
/* const URL = "https://api.kanye.rest"; */
const API = "http://localhost:3001/api";

export const apiGetSettings =
  (
    dispatch: Dispatch<Action>,
    setSettings: Dispatch<SetStateAction<TSettings | undefined>>,
    setButtonText: Dispatch<SetStateAction<TButtonText | undefined>>
  ) => {

    dispatch(Action.REQUEST_SETTINGS);

    return axios.get(`${API}/settings`)
      .then((response) => {
        if (response.status === 200) {
          const res = response.data[0];
          setSettings({
            id: res.id,
            name: res.name,
            service_fee: parseFloat(res.service_fee),
            costs: parseFloat(res.costs)
          });
          dispatch(Action.SUCCESS_SETTINGS);
        } else {
          dispatch(Action.ERROR_SETTINGS);
          setButtonText('Нет связи с сервеом');
        }
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        dispatch(Action.ERROR_SETTINGS);
        setButtonText(`Ошибка: что-то на сервере`);
      });
  };

function savePaymentData(paymentData: ILinkPayload) {
  return axios.post(`${API}/nicepay_request`, {
    data: paymentData
  });
}

export const apiGetLink =
  (
    values: TInputValues,
    resultAmount: number,
    dispatch: Dispatch<Action>,
    setLink: Dispatch<SetStateAction<TLink | undefined>>,
    setButtonText: Dispatch<SetStateAction<TButtonText | undefined>>
  ) => {

    dispatch(Action.REQUEST_LINK);

    const payload: ILinkPayload = {
      merchant_id: "6651c752b41dd5fa61f831fb",
      secret: "fOQVo-yArw8-sP1Ug-1vynS-AiWuR",
      order_id: values[InputName.LOGIN] + getCurrentDateTimeString(),
      account: "budz@yandex.ru",
      amount: Math.floor(resultAmount * 100),
      currency: "RUB",
      description: values[InputName.TG],
      customer: values[InputName.TG]
    };

    savePaymentData(payload)
      .then(() => {
        console.log(payload);
      })
      .catch((error) => {
        console.error('Ошибка при сохранении данных:', error);
      });


    return axios.post(URL, payload)
      .then(response => response.data)
      .then((data) => {
        if (data.status === 'success') {
          dispatch(Action.SUCCESS_LINK);
          setButtonText('Перенаправляем на сервис оплаты');
          setLink(data.data.link);
        } else if (data.status === 'error') {
          dispatch(Action.ERROR_LINK);
          setButtonText(`Ошибка: ${data.data.message}`);
        }
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        dispatch(Action.ERROR_LINK);
        setButtonText(`Ошибка: ${error}`);
      });
  };