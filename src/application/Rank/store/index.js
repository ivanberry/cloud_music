/*
 * @Description: Create index.js, Happy Coding.
 * @Author: header.css@gmail.com
 * @Date: 2020/8/4
 */
import produce from "immer";
import { getRankerListRequest } from "../../../api/request";

export const CHANGE_RANK_LIST = "home/rank/CHANGE_RANK_LIST";
export const CHANGE_LOADING = "home/rank/CHANGE_LOADING";

const changeRankList = data => ({
  type: CHANGE_RANK_LIST,
  data
});

const changeLoading = data => ({
  type: CHANGE_LOADING,
  data
});

/**
 * 获取排行榜列表
 * @return {function(...[*]=)}
 */
export function getRankList() {
  return dispatch => {
    getRankerListRequest().then(res => {
      const list = res && res.list;
      dispatch(changeRankList(list));
      dispatch(changeLoading(false));
    });
  };
}

const initialState = {
  loading: true,
  list: []
};

// reducer
const reducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case CHANGE_RANK_LIST:
      draft.list = action.data;
      break;
    case CHANGE_LOADING:
      draft.loading = action.data;
      break;
    default:
      return draft;
  }
});

export { reducer };
