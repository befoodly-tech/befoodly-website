import { MethodType, ParamData } from '../types/ApiHelperFile';

const BASE_URL = window.config.BASE_URL;

export const API_URLS = {
  HEALTH_CHECK: '/ping',
  LOGIN_USER: '/v1/login',
  SIGN_UP_USER: '/v1/signup',
  VERIFY_OTP: '/v1/otp-verify',
  EDIT_CUSTOMER: '/v1/customer/edit',
  FETCH_CUSTOMER_DATA: '/v1/customer',
  FETCH_COOK_DATA: '/v1/cook/fetch/popular'
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
      throw err;
    });

  return data;
};

export default ApiHelper;
