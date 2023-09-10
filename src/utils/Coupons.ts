import { OfferCardProps } from '../components/OfferBanner/OfferCard/OfferCard';
import SvgDiet from '../assets/svgs/Diet.svg';
import { DiscountType } from '../types/CommonType';

export const offerCards: OfferCardProps[] = [
  {
    disRupee: 50,
    disDescription: 'Flat Discount',
    disIcon: SvgDiet,
    disRule: 'On order above ₹ 199',
    background:
      'linear-gradient(136deg, #15ca6a 0%, #14ae5c 88.81%),linear-gradient(140deg, #4fa0ff 0%, #434bff 100%)'
  },
  {
    disPercentage: 30,
    disDescription: 'Flat Discount',
    disIcon: SvgDiet,
    disRule: 'On order above ₹ 299',
    background: 'linear-gradient(140deg, #4FA0FF 0%, #434BFF 100%)'
  },
  {
    disRupee: 20,
    disDescription: 'Only For Delivery',
    disIcon: SvgDiet,
    disRule: 'On every order, COD :)',
    background:
      'linear-gradient(136deg, #C94217 0%, #EE682F 88.81%), linear-gradient(140deg, #4FA0FF 0%, #434BFF 100%)'
  }
];

export const calcDiscountAmount = (discount: number, totalCost: number) => {
  return Math.floor((discount * totalCost) / 100);
};

export const isValidCoupon = (discounType: DiscountType, totalCost: number) => {
  if (discounType == DiscountType.PERCENTAGE) {
    return totalCost >= 299;
  } else {
    return totalCost >= 199;
  }
};
