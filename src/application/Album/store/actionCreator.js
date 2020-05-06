/*
 * @Description: Create actionCreator.js, Happy Coding.
 * @Author: header.css@gmail.com
 * @Date: 2020/5/2
 */

// action

import { CHANGE_CURRENT_ALBUM, CHANGE_ENTER_LOADING } from "../../../constants";
import { getAlbumDetailRequest } from "../../../api/request";

export const changeCurrentAlbum = data => ({
  type: CHANGE_CURRENT_ALBUM,
  data
});

export const changeEnterLoading = data => ({
  type: CHANGE_ENTER_LOADING,
  data
});

export const getAlbumList = id => {
  return dispatch => {
    getAlbumDetailRequest(id)
      .then(res => {
        const { playlist } = res;
        dispatch(changeCurrentAlbum(playlist));
        dispatch(changeEnterLoading(false));
      })
      .catch(err => console.log(err));
  };
};
