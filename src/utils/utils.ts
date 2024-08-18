import { TErrorInput, TInputValues } from "../types/types";
import { InputName } from "./constants";

export function isHttpsUrl(url: string): boolean {
  return url.startsWith('https://');
}

//функция проставляет в объекте ошибок значения true, если инпут пустой
export function updateFlagsIfEmpty(errorObj: TErrorInput, valuesObj:TInputValues):TErrorInput {
  const updatedFlags:TErrorInput = { ...errorObj };

  for (const key in valuesObj) {
    const typedKey = key as InputName;
      if (valuesObj[typedKey].trim() === '') {
          updatedFlags[typedKey] = false; // Если значение пустое, флаг становится true
      } else {
          updatedFlags[typedKey] = true; // Если значение не пустое, флаг остается или становится false
      }
  }

  return updatedFlags;
}

export function hasEmptyValue(enumObj: object): boolean {
  return Object.values(enumObj).some(value => value === '');
}

export function areAllValuesTrue(obj: object):boolean {
  return Object.values(obj).every(value => Boolean(value) === true);
}

export function getCurrentDateTimeString() {
  const now = new Date();
  
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  return `${day}${month}${year}${hours}${minutes}${seconds}`;
}
