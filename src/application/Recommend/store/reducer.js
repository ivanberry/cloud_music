import * as actionTypes from "../../../constants";
import produce from "immer";


const initialState = {
  enterLoading: true,
  bannerList: [],
  recommendList: [],
}

export default produce((draft = initialState, action) => {
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
