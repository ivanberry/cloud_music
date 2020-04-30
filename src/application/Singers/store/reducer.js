import produce from "immer";
import {
  CHANGE_ENTER_LOADING,
  CHANGE_PAGE_COUNT,
  CHANGE_PULLDOWN_LOADING,
  CHANGE_PULLUP_LOADING,
  CHANGE_SINGER_LIST
} from "../../../constants";

const initialState = {
  list: [],
  enterLoading: true,
  pullUpLoading: false,
  pullDownLoading: true,
  pageCount: 0
};

export default produce((draft = initialState, action) => {
  switch (action.type) {
    case CHANGE_SINGER_LIST:
      draft.list = action.data;
      break;
    case CHANGE_ENTER_LOADING:
      draft.enterLoading = false;
      break;
    case CHANGE_PULLUP_LOADING:
      draft.pullUpLoading = false;
      break;
    case CHANGE_PULLDOWN_LOADING:
      draft.pullDownLoading = false;
      break;
    case CHANGE_PAGE_COUNT:
      draft.pageCount = action.data;
      break;
    default:
      return draft;
  }
});
