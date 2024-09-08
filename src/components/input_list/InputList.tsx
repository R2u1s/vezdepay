import React, { useEffect,useState } from 'react';
import styles from './InputList.module.css';
import { Input } from '../input/input';
import { InputName } from '../../utils/constants';
import { updateFlagsIfEmpty } from '../../utils/utils';

const InputList: React.FC<any> = ({values, handleChange, validation, setValidation}) => {

  const saveHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  useEffect(()=>{
    validation.check && setValidation(updateFlagsIfEmpty(validation,values));
    if(values[InputName.AMOUNT] < 150){
      setValidation({
        ...validation,
        [InputName.AMOUNT]: false,
      });
    }
  },[values,validation.check]);

  return (
      <form className={`${styles['profile-inputs']}`} onSubmit={saveHandler}>
        <Input
          type={'text'}
          placeholder={'Ваш логин'}
          onChange={e => {
            handleChange(e)
          }}
          icon={'UserIcon'}
          value={values[InputName.LOGIN]}
          name={InputName.LOGIN}
          error={!validation[InputName.LOGIN]}
          errorText={'Введите логин'}
          size={'default'}
        />
        <Input
          type={'number'}
          placeholder={'Сумма пополнения'}
          onChange={e => {
            handleChange(e);
          }}
          icon={'CardIcon'}
          value={values[InputName.AMOUNT]}
          name={InputName.AMOUNT}
          error={!validation[InputName.AMOUNT]}
          errorText={values[InputName.AMOUNT] === '' ? 'Введите желаемую сумму пополнения' : 'Сумма пополнения должна быть больше 150 руб.'}
          size={'default'}

        />
        <Input
          type={'text'}
          placeholder={'Номер телефона / ник в ТГ'}
          onChange={e => {
            handleChange(e);
          }}
          icon={'TelegramIcon'}
          value={values[InputName.TG]}
          name={InputName.TG}
          error={!validation[InputName.TG]}
          errorText={'Введите контактные данные'}
        />
      </form>
  );
}

export default InputList;