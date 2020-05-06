/*
 * @Description: Create actionCreator.js, Happy Coding.
 * @Author: header.css@gmail.com
 * @Date: 2020/5/6
 */

import {
  CHANGE_ARTIST,
  CHANGE_ARTIST_SONG,
  CHANGE_ENTER_LOADING
} from "../../../constants";
import { getSingerInfoRequest } from "../../../api/request";

const changeSongs = data => ({
  type: CHANGE_ARTIST_SONG,
  data
});

const changeArtist = data => ({
  type: CHANGE_ARTIST,
  data
});

export const changeEnterLoading = data => ({
  type: CHANGE_ENTER_LOADING,
  data
});

export const getSingerInfo = id => {
  return dispatch => {
    getSingerInfoRequest(id).then(res => {
      const { artist, hotSongs: songs } = res;
      dispatch(changeArtist(artist));
      dispatch(changeSongs(songs));
      dispatch(changeEnterLoading(false));
    });
  };
};
