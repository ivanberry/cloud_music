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

/**
 * 获取热门歌手列表
 * @param count
 * @return {Promise<AxiosResponse<any>>}
 */
export const getHotSingerListRequest = count => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};

/**
 * 获取特地歌手列表
 * @param category
 * @param alpha
 * @param count
 * @return {Promise<AxiosResponse<any>>}
 */
export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha &&
      alpha.toLowerCase()}&offset=${count}`
  );
};

/**
 * 获取专辑详情
 * @param id
 * @return {Promise<AxiosResponse<any>>}
 */
export const getAlbumDetailRequest = id => {
  return axiosInstance.get(`/playlist/detail?id=${id}`);
};

export const getSingerInfoRequest = id => {
  return axiosInstance.get(`/artists?id=${id}`);
};

/**
 * 获取排行榜
 * @return {Promise<AxiosResponse<any>>}
 */
export const getRankerListRequest = () => {
  return axiosInstance.get("/toplist/detail");
};
