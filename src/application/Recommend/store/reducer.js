import * as actionTypes from "./contants";
import produce from "immer";

export default produce((draft = {}, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      draft.bannerList = action.data;
      break;
    case actionTypes.CHANGE_RECOMMEND_LIST:
      draft.recommendList = action.data;
      break;
    default:
      return draft;
  }
});
