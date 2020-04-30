import * as actionTypes from "../../../constants";
import produce from "immer";

export default produce((draft = { enterLoading: true }, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      draft.bannerList = action.data;
      break;
    case actionTypes.CHANGE_RECOMMEND_LIST:
      draft.recommendList = action.data;
      draft.enterLoading = false;
      break;
    default:
      return draft;
  }
});
