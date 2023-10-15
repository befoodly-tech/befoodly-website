import { AddressData, HourMinuteTimeType } from '../types/CommonType';

export const combineTwoStrings = (data1: string, data2: string) => data1 + data2;

export const convertBigNumbers = (data: number) => {
  if (Math.abs(data) / 1000 >= 1) {
    return (Math.abs(data) / 1000).toFixed(1) + 'k';
  }

  return data;
};

export const formatStringToDate = (data: string) => {
  const date = new Date(data);

  return `${date.getDate()}-${MonthName[date.getMonth()]}`;
};

export const formatStringToTime = (data: string) => {
  const date = new Date(data);

  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  const hours = date.getHours();

  if (hours < 12) {
    return `${hours}:${minutes} AM`;
  } else if (hours == 12) {
    return `${hours}:${minutes} PM`;
  } else {
    return `${hours - 12}:${minutes} PM`;
  }
};

export const formatStringToDateTime = (data: string) => {
  if (data == null) {
    return '';
  }
  const date = formatStringToDate(data);
  const time = formatStringToTime(data);

  return time + ', ' + date;
};

const toIsoString = (date: Date) => {
  const pad = (num: number) => {
    return (num < 10 ? '0' : '') + num;
  };

  return (
    date.getFullYear() +
    '-' +
    pad(date.getMonth() + 1) +
    '-' +
    pad(date.getDate()) +
    'T' +
    pad(date.getHours()) +
    ':' +
    pad(date.getMinutes()) +
    ':' +
    pad(date.getSeconds())
  );
};

export const formatDateTimeToString = (data: HourMinuteTimeType) => {
  const deliveryTime = new Date();
  deliveryTime.setHours(data.hour, data.minutes);

  return toIsoString(deliveryTime);
};

export const deliverySlotToStringConversion = (data?: HourMinuteTimeType) => {
  const minHour = data?.minutes == 0 ? data?.hour - 1 : data?.hour;
  const minMinutes = data?.minutes ? Math.abs(data.minutes - 30) : 0;

  return `${minHour}:${minMinutes} - ${data?.hour}:${data?.minutes}`;
};

export const makeYourOwnMeal = {
  id: 99999,
  referenceId: 'make-your-own-meal',
  title: 'Make Your Meal :)',
  imgUrl: 'product-images/MakeYourOwnMeal.jpg',
  description:
    'In make your meal, you can make a combination of your meal based on available options. Think of it as a Digital buffet, cost of the meal will be the sum of selected items!',
  price: 0,
  acceptingTime: '2023-09-03T11:30:00',
  orderNo: 10,
  feedback: {
    rating: 5.0,
    reviews: 500
  },
  vendorId: 1,
  providerData: {
    providerName: 'BeFoodly Kitchen',
    location: ''
  }
};

export interface DeliveryTime {
  title: string;
  timeInterval: string;
}

export const deliverySlot: DeliveryTime[] = [
  {
    title: 'Lunch',
    timeInterval: '12-2 PM'
  },
  {
    title: 'Dinner',
    timeInterval: '8-10 PM'
  }
];

export const MonthName = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const addressInLine = (address: AddressData) => {
  let currentAddress = address?.addressFirst;

  if (address?.addressSecond) {
    currentAddress += ', ' + address?.addressSecond;
  }

  currentAddress += ', ' + address?.pinCode;
  currentAddress += ', ' + address?.city;

  return currentAddress;
};
