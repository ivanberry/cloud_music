/*
 * @Description: Create reducer.js, Happy Coding.
 * @Author: header.css@gmail.com
 * @Date: 2020/5/6
 */
import produce from "immer";
import {
  CHANGE_ARTIST,
  CHANGE_ARTIST_SONG,
  CHANGE_ENTER_LOADING
} from "../../../constants";

const initialState = {
  loading: true, // 进入时的loading态
  artist: null, // 歌手具体信息
  songs: []
};

export default produce((draft = initialState, action) => {
  switch (action.type) {
    case CHANGE_ARTIST:
      draft.artist = action.data;
      break;
    case CHANGE_ARTIST_SONG:
      draft.songs = action.data;
      break;
    case CHANGE_ENTER_LOADING:
      draft.loading = action.data;
      break;
    default:
      return draft;
  }
});
