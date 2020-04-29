/*
 * @Description: Create request.js, Happy Coding.
 * @Author: guoyuan@icarbonx.com
 * @Date: 2020/4/28
 */

import { axiosInstance } from "./config";

/**
 * 获取banner图列表
 * @return {Promise<AxiosResponse<any>>}
 */
export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

/**
 * 获取歌单推荐列表
 * @return {Promise<AxiosResponse<any>>}
 */
export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

export const getHotSingerListRequest = count => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};

export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};
