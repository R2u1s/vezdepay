import React from 'react';
import styles from './InputList.module.css';
import { Input } from '../input/input';
import { INPUT_LOGIN,INPUT_AMOUNT,INPUT_TG } from '../app/app';

const InputList: React.FC<any> = ({values, handleChange, setValues}) => {

  const [isInputChange, setIsInputChange] = React.useState<boolean>(false);

  const cancelHandler = () => {
    setIsInputChange(false);
    setValues({
      [INPUT_LOGIN]: '',
      [INPUT_AMOUNT]: '',
      [INPUT_TG]: ''
    });
  }

  const saveHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const classNameToggle = isInputChange ? `${styles['profile-buttons']}` : `${styles['profile-buttons__hidden']}`

  return (
      <form className={`${styles['profile-inputs']}`} onSubmit={saveHandler}>
        <Input
          type={'text'}
          placeholder={'Ваш логин'}
          onChange={e => {
            setIsInputChange(true);
            handleChange(e);
          }}
          icon={'UserIcon'}
          value={values[INPUT_LOGIN]}
          name={INPUT_LOGIN}
          error={true}
          errorText={'Ошибка'}
          size={'default'}
        />
        <Input
          type={'number'}
          placeholder={'Сумма пополнения'}
          onChange={e => {
            setIsInputChange(true);
            handleChange(e);
          }}
          icon={'CardIcon'}
          value={values[INPUT_AMOUNT]}
          name={INPUT_AMOUNT}
          error={false}
          errorText={'Ошибка'}
          size={'default'}

        />
        <Input
          type={'text'}
          placeholder={'Номер телефона / ник в ТГ'}
          onChange={e => {
            setIsInputChange(true);
            handleChange(e);
          }}
          icon={'TelegramIcon'}
          value={values[INPUT_TG]}
          name={INPUT_TG}
        />
      </form>
  );
}

export default InputList;