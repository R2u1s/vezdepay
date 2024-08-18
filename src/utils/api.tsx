import axios from "axios";
import { Dispatch, SetStateAction } from "react";

import { Action, InputName } from "./constants";
import { ILinkResponse, ILinkPayload, TInputValues, TButtonText, TLink } from '../types/types';
import { getCurrentDateTimeString } from "./utils";

import { CALC_CONSTANTS } from "./constants";

const URL = "https://nicepay.io/public/api/payment";
/* const URL = "https://api.kanye.rest"; */

export const apiGetLink =
  (
    values: TInputValues,
    dispatch: Dispatch<Action>,
    setLink: Dispatch<SetStateAction<TLink | undefined>>,
    setButtonText: Dispatch<SetStateAction<TButtonText | undefined>>
  ) => {

    dispatch(Action.REQUEST_LINK);

    const payload: ILinkPayload = {
      merchant_id: "6651c752b41dd5fa61f831fb",
      secret: "fOQVo-yArw8-sP1Ug-1vynS-AiWuR",
      order_id: values[InputName.LOGIN]+getCurrentDateTimeString(),
      account: "budz@yandex.ru",
      amount: (((parseInt(values[InputName.AMOUNT], 10) + CALC_CONSTANTS.SERVICE) * CALC_CONSTANTS.COSTS) + parseInt(values[InputName.AMOUNT], 10) + CALC_CONSTANTS.COSTS) * 100,
      currency: "RUB",
      description: values[InputName.TG],
      customer: "customer"
    };

    return axios.post(URL, payload)
      .then(response => response.data)
      .then((data) => {
/*         if (data) {
          setLink(URL);
          dispatch(Action.SUCCESS_LINK);
        }; */
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