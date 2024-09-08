import axios from "axios";
import { Dispatch, SetStateAction } from "react";

import { Action, InputName } from "./constants";
import { ILinkPayload, TInputValues, TButtonText, TLink, TSettings } from '../types/types';
import { getCurrentDateTimeString } from "./utils";

/* const URL = "https://api.kanye.rest"; */
const API = "http://localhost:3001/api";
/* const API = "https://booksearch.site/api"; */

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
          console.log(res);
          setSettings({
            id: res.id,
            name: res.name,
            service_fee: parseFloat(res.service_fee),
            costs: parseFloat(res.costs),
            card_number: res.card_number,
            card_bank: res.card_bank,
            phone_number: res.phone_number,
            phone_bank: res.phone_bank
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
      order_id: values[InputName.LOGIN] + getCurrentDateTimeString(),
      account: "vezdepay@yandex.ru",
      amount: Math.floor(resultAmount * 100),
      description: values[InputName.LOGIN],
      customer: values[InputName.TG]
    };

    return axios.post(`${API}/nicepay_request`, payload)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.hasOwnProperty('link')) {
            setButtonText('Перенаправляем на сервис оплаты');
            dispatch(Action.SUCCESS_LINK);
            setLink(response.data.link);
          } else if (response.data.hasOwnProperty('error')) {
            dispatch(Action.ERROR_LINK);
            setButtonText(`Ошибка: ${response.data.error}`);
          } else {
            dispatch(Action.ERROR_LINK);
            setButtonText(`Ошибка при переходе на платежный сервис`);
          }
        } else {
          dispatch(Action.ERROR_LINK);
          setButtonText(`Ошибка при переходе на платежный сервис`);
        }
      })
      .catch(error => {
        console.log(`Error: ${error}`);
        dispatch(Action.ERROR_LINK);
        setButtonText(`Ошибка: ${error}`);
      });
  };