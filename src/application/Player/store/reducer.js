/*
 * @Description: Create reducer.js, Happy Coding.
 * @Author: header.css@gmail.com
 * @Date: 2020/5/6
 */

import { playMode } from "../../../api/config";
import produce from "immer";
import { SET_CURRENT_INDEX, SET_FULL_SCREEN } from "../../../constants";

const initialState = {
  fullScreen: false,
  playing: false,
  sequencePlayList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  showPlayList: false,
  currentSong: {}
};

export default produce((draft = initialState, action) => {
  switch (action.type) {
    case SET_FULL_SCREEN:
      draft.fullScreen = action.data;
      break;
    case SET_CURRENT_INDEX:
      draft.currentSong = action.data;
      break;
    default:
      break;
  }
});
