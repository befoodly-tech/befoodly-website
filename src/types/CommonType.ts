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

export interface CustomerData {
  id: number;
  createdAt: string;
  updatedAt: string;
  version: number;
  referenceId: string;
  name: string;
  phoneNumber: string;
  sessionToken: string;
  email: string;
  address: string;
  isActive: boolean;
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
  deliveryTime?: string;
  feedback: FeedbackData;
  vendorId: number;
  providerData: VendorData;
  createdAt?: string;
  updatedAt?: string;
}

export interface AddressData {
  id: number;
  createdAt: string;
  updatedAt: string;
  version: number;
  referenceId: string;
  customerReferenceId: string;
  title: string;
  phoneNumber: string;
  addressFirst: string;
  addressSecond: string;
  pinCode: string;
  city: string;
  state: string;
}

export interface VendorData {
  providerName: string;
  location: string;
}

export interface GenericGlobalData {
  phoneNumber: string;
  customerId: string;
  sessionToken: string;
  s3Url: string;
}

export enum DiscountType {
  PERCENTAGE,
  AMOUNT
}

export interface CartItem {
  productId: number;
  productName: string;
  orderCount: number;
  cost: number;
}

export enum DeliveryStatus {
  INITIATED = 'INITIATED',
  PENDING = 'PENDING',
  ON_WAY = 'ON_WAY',
  COMPLETED = 'COMPLETED',
  REJECTED = 'REJECTED',
  WAITING = 'WAITING'
}

export interface DeliveryManType {
  name: string;
  phoneNumber: string;
}

export interface OrderDataType {
  orderId: number;
  finalCost: number;
  discountCost: number;
  deliveryCost: number;
  status: DeliveryStatus;
  deliveryManData: DeliveryManType;
  deliveryAddress: AddressData;
  deliveryTime: string;
  orderTime: string;
  description?: string;
}

export interface FAQsType {
  question: string;
  answer: string;
}
