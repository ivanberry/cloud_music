/*
 * @Description: Create reducer.js, Happy Coding.
 * @Author: header.css@gmail.com
 * @Date: 2020/5/2
 */

// 编写reducer
import produce from "immer";
import { CHANGE_CURRENT_ALBUM, CHANGE_ENTER_LOADING } from "../../../constants";

const initState = {
  detail: {
    creator: null,
    coverImgUrl: "",
    subscribedCount: 0,
    name: "",
    tracks: []
  },
  enterLoading: true
};

export default produce((draft = initState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_ALBUM:
      // update album detail
      draft.detail = action.data;
      break;
    case CHANGE_ENTER_LOADING:
      draft.enterLoading = action.data;
      break;
    default:
      return draft;
  }
});
