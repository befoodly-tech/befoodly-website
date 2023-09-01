export interface AppConfig {
  BASE_URL: string;
  S3_URL: string;
}

export interface CustomCardProps {
  title: string;
  description: string;
  photoUrl: string;
  author: string;
}

export interface TeamCardProps {
  photoUrl: string;
  name: string;
  title: string;
  description: string;
  linkedinLink: string;
}

export interface Location {
  id: number;
  title: string;
  address: string;
}

export interface ChefData {
  id: number;
  referenceId: string;
  vendorId: number;
  name: string;
  imgUrl: string;
  description: string;
  orderCounts: number;
  specialities: Array<string>;
  feedback: FeedbackData;
}

export interface FeedbackData {
  rating: number;
  reviews: number;
}

export interface ProductData {
  id: number;
  referenceId: string;
  title: string;
  imgUrl: string;
  description: string;
  orderNo: number;
  price: number;
  acceptingTime: string;
  deliveryTime: string;
  feedback: FeedbackData;
  vendorId: number;
  providerData: VendorData;
  createdAt: string;
  updatedAt: string;
}

export interface VendorData {
  providerName: string;
  location: string;
}

export const Month = [
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
