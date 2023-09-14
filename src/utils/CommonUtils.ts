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
