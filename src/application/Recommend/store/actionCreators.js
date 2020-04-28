/*
 * @Description: Create actionCreators.js, Happy Coding.
 * @Author: guoyuan@icarbonx.com
 * @Date: 2020/4/28
 */

import * as actionTypes from "./contants";
import {
  getBannerRequest,
  getRecommendListRequest
} from "../../../api/request";

// actions
export const changeBannerList = data => ({
  type: actionTypes.CHANGE_BANNER,
  data
});

export const changeRecommendList = data => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data
});

// really call
export const getBannerList = () => {
  return dispatch => {
    getBannerRequest()
      .then(data => {
      	const {banners} = data;
        dispatch(changeBannerList(banners));
      })
      .catch(err => console.log(err));
  };
};

export const getRecommendList = () => {
  return dispatch => {
    getRecommendListRequest()
      .then(data => {
        const { result } = data;
        dispatch(changeRecommendList(result));
      })
      .catch(err => console.log(err));
  };
};
