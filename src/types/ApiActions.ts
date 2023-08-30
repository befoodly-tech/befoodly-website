export interface OtpRequest {
  phoneNumber: string;
  otp: string;
}

export interface CustomerFieldValues {
  name: string;
  email: string;
}

export interface LoginResponse {
  sessionToken?: string;
  phoneNumber?: string;
}

export interface GenericApiResponse {
  data?: any;
  statusCode?: number;
  errorMessage?: string;
}
