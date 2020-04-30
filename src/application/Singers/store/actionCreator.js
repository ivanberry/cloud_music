import {
  CHANGE_ENTER_LOADING,
  CHANGE_OFFSET,
  CHANGE_PULLDOWN_LOADING,
  CHANGE_PULLUP_LOADING,
  CHANGE_SINGER_LIST
} from "../../../constants";
import {
  getHotSingerListRequest,
  getSingerListRequest
} from "../../../api/request";

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
export const changeOffset = data => ({
  type: CHANGE_OFFSET,
  data
});

/**
 * 进场loading action
 * @param data
 * @return {{data: *, type: string}}
 */
export const changeEnterLoading = data => ({
  type: CHANGE_ENTER_LOADING,
  data
});

/**
 * 上拉刷新loading action
 * @param data
 * @return {{data: *, type: string}}
 */
export const changePullUpLoading = data => ({
  type: CHANGE_PULLUP_LOADING,
  data
});

/**
 * 下拉刷新loading action
 * @param data
 * @return {{data: *, type: string}}
 */
export const changePullDownLoading = data => ({
  type: CHANGE_PULLDOWN_LOADING,
  data
});

/**
 * 获取热门歌手列表
 * @return {function(...[*]=)}
 */
export const getHotSingerList = () => {
  return dispatch => {
    getHotSingerListRequest(0)
      .then(res => {
        const { artists } = res;
        dispatch(changeOffset(artists.length));
        dispatch(changeSingerList(artists));
        dispatch(changeEnterLoading(false));
      })
      .catch(err => console.log("热门歌手数据获取失败"));
  };
};

/**
 * 获取更多热门歌手
 */
export const refreshMoreHotSingerList = () => {
  return (dispatch, getState) => {
    const {
      singers: { list, offset }
    } = getState();
    console.log('offset: ', offset);
    getHotSingerListRequest(offset)
      .then(res => {
        const { artists } = res;
        const result = [...list, ...artists];
        dispatch(changeOffset(result.length));
        dispatch(changeSingerList(result));
        dispatch(changePullUpLoading(false));
      })
      .catch(err => console.log(err));
  };
};

/**
 * 获取歌手列表
 * @param category: 分类
 * @param alpha: 首字母类别
 * @return {function(...[*]=)}
 */
export const getSingerList = (category, alpha) => {
  return dispatch => {
    getSingerListRequest(category, alpha, 0)
      .then(res => {
        const { artists } = res;
        dispatch(changeOffset(artists.length));
        dispatch(changeSingerList(artists));
        // TODO 2020/5/1 : 如何绑定不同的loading状态呢？
        dispatch(changeEnterLoading(false));
      })
      .catch(err => console.log(err));
  };
};

/**
 * 加载更多歌手列表
 * @param category
 * @param alpha
 */
export const refreshMoreSingerList = (category, alpha) => {
  return (dispatch, getState) => {
    const {
      singers: { list, offset }
    } = getState();
    console.log('offset: ', offset);
    getSingerListRequest(category, alpha, offset)
      .then(res => {
        const { artists } = res;
        const result = [...list, ...artists];
        dispatch(changeOffset(result.length));
        dispatch(changeSingerList(result));
        dispatch(changePullUpLoading(false));
      })
      .catch(err => console.log(err));
  };
}
