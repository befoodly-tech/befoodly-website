import { Month } from '../types/CommonType';

export const combineTwoStrings = (data1: string, data2: string) => data1 + data2;

export const convertBigNumbers = (data: number) => {
  if (Math.abs(data) / 1000 >= 1) {
    return (Math.abs(data) / 1000).toFixed(1) + 'k';
  }

  return data;
};

export const formatStringToDate = (data: string) => {
  const date = new Date(data);

  return `${date.getDate()}-${Month[date.getMonth()]}`;
};

export const formatStringToTime = (data: string) => {
  const date = new Date(data);

  const hours = date.getHours();

  if (hours < 12) {
    return `${hours}:${date.getMinutes()} AM`;
  } else if (hours == 12) {
    return `${hours}:${date.getMinutes()} PM`;
  } else {
    return `${hours - 12}:${date.getMinutes()} PM`;
  }
};
