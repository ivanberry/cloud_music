import {
  CHANGE_ENTER_LOADING,
  CHANGE_PAGE_COUNT,
  CHANGE_PULLDOWN_LOADING,
  CHANGE_PULLUP_LOADING,
  CHANGE_SINGER_LIST
} from "../../../constants";
import { getHotSingerListRequest } from "../../../api/request";

/**
 * 歌手列表变化, action
 * @param data
 * @return {{data: *, type: string}}
 */
const changeSingerList = data => ({
  type: CHANGE_SINGER_LIST,
  data
});

/**
 * 翻页-action
 * @param data
 * @return {{data: *, type: string}}
 */
const changePageCount = data => ({
  type: CHANGE_PAGE_COUNT,
  data
});

/**
 * 进场loading action
 * @param data
 * @return {{data: *, type: string}}
 */
const changeEnterLoading = data => ({
  type: CHANGE_ENTER_LOADING,
  data
});

/**
 * 上拉刷新loading action
 * @param data
 * @return {{data: *, type: string}}
 */
const changePullUpLoading = data => ({
  type: CHANGE_PULLUP_LOADING,
  data
});

/**
 * 下拉刷新loading action
 * @param data
 * @return {{data: *, type: string}}
 */
const changePullDownLoading = data => ({
  type: CHANGE_PULLDOWN_LOADING,
  data
});

export const getHotSingerList = () => {
  return dispatch => {
    getHotSingerListRequest(0).then(res => {
      const { artists } = res;
      dispatch(changeSingerList(artists))
      dispatch(changeEnterLoading(false))
      // dispatch(changePageCount())
    }).catch(err => console.log('热门歌手数据获取失败'));
  };
};
