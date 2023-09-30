import { AddressData } from '../types/CommonType';

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
