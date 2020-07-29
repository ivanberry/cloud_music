/*
 * @Description: Create config.js, Happy Coding.
 * @Author: guoyuan@icarbonx.com
 * @Date: 2020/4/28
 */

import axios from "axios";

const baseURL = process.env.baseURL || "http://localhost:3001";

const axiosInstance = axios.create({
  baseURL
});

axiosInstance.interceptors.response.use(
  res => res.data,
  error => {
    console.log(error, "网络错误");
  }
);

export const playMode = {
  sequence: 0,
  loop: 1,
  random: 0
};

export { axiosInstance };
