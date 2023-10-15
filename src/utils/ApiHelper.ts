import { MethodType, ParamData } from '../types/ApiHelperFile';

const BASE_URL = window.config.BASE_URL;

export const API_URLS = {
  SESSION_CHECK: '/v1/check',
  LOGIN_USER: '/v1/login',
  SIGN_UP_USER: '/v1/signup',
  VERIFY_OTP: '/v1/otp-verify',
  EDIT_CUSTOMER: '/v1/customer/edit',
  FETCH_CUSTOMER_DATA: '/v1/customer',
  FETCH_COOK_DATA: '/v1/cook/fetch/popular',
  FETCH_ACTIVE_PRODUCTS: '/v1/product/fetch/all',
  FETCH_POPULAR_PRODUCTS: '/v1/product/fetch/popular',
  FETCH_ALL_ADDRESSES: '/v1/address',
  ADD_ADDRESS: '/v1/address',
  EDIT_ADDRESS: '/v1/address/edit',
  ADD_TO_CART: '/v1/order/add-to-cart',
  FETCH_CART_DATA: '/v1/order/fetch',
  EDIT_CART: '/v1/order/edit-cart',
  PLACE_ORDER: '/v1/order/confirm',
  FETCH_PENDING_ORDERS: '/v1/delivery/pending-orders',
  FETCH_ORDER_ITEMS: '/v1/order/order-details',
  FETCH_AVAILABLE_TIME_SLOTS: '/v1/delivery/available-slots'
};

export const getApiUrl = (uri: string, path?: string, params?: ParamData[]) => {
  let apiUrl = uri;

  if (path) {
    apiUrl += '/' + path;
  }

  if (params) {
    apiUrl += getParamString(params);
  }

  return BASE_URL + apiUrl;
};

const getParamString = (params?: ParamData[]) => {
  if (params && params?.length > 0) {
    let s = '?';

    for (let i = 0; i < params.length; i++) {
      s += params[i]?.key;
      s += '=' + params[i]?.value;
    }

    return s;
  }

  return '';
};

const ApiHelper = async (url: string, method?: MethodType, body?: string) => {
  const data = await fetch(url, {
    method,
    body,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      platform: 'WEB'
    }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err.error;
    });

  return data;
};

export default ApiHelper;
