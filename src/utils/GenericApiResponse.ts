import { GenericApiResponse } from '../types/ApiActions';

export const isApiStatusSuccess = (apiData: GenericApiResponse): boolean => {
  if (
    apiData &&
    apiData?.data &&
    (apiData?.statusCode == 200 || apiData?.statusCode == 201 || apiData?.statusCode == 202)
  ) {
    return true;
  }

  return false;
};
