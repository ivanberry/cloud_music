/*
 * @Description: Create request.js, Happy Coding.
 * @Author: guoyuan@icarbonx.com
 * @Date: 2020/4/28
 */

import { axiosInstance } from "./config";

export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};
