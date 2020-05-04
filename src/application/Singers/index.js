import React, { useEffect, useState } from "react";
import LazyLoad, { forceCheck } from "react-lazyload";

import Horizon from "../../baseUI/horizon-item";
import { List, ListContainer, ListItem, NavContainer } from "./style";
import Scroll from "../../components/scroll";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { actionTypes } from "./store";
import Loading from "../../components/loading";
import { renderRoutes } from "react-router-config";

// mock data
export const categoryTypes = [
  {
    name: "华语男",
    key: "1001"
  },
  {
    name: "华语女",
    key: "1002"
  },
  {
    name: "华语组合",
    key: "1003"
  },
  {
    name: "欧美男",
    key: "2001"
  },
  {
    name: "欧美女",
    key: "2002"
  },
  {
    name: "欧美组合",
    key: "2003"
  },
  {
    name: "日本男",
    key: "6001"
  },
  {
    name: "日本女",
    key: "6002"
  },
  {
    name: "日本组合",
    key: "6003"
  },
  {
    name: "韩国男",
    key: "7001"
  },
  {
    name: "韩国女",
    key: "7002"
  },
  {
    name: "韩国组合",
    key: "7003"
  },
  {
    name: "其他男歌手",
    key: "4001"
  },
  {
    name: "其他女歌手",
    key: "4002"
  },
  {
    name: "其他组合",
    key: "4003"
  }
];

// 歌手首字母
export const alphaTypes = [
  {
    key: "A",
    name: "A"
  },
  {
    key: "B",
    name: "B"
  },
  {
    key: "C",
    name: "C"
  },
  {
    key: "D",
    name: "D"
  },
  {
    key: "E",
    name: "E"
  },
  {
    key: "F",
    name: "F"
  },
  {
    key: "G",
    name: "G"
  },
  {
    key: "H",
    name: "H"
  },
  {
    key: "I",
    name: "I"
  },
  {
    key: "J",
    name: "J"
  },
  {
    key: "K",
    name: "K"
  },
  {
    key: "L",
    name: "L"
  },
  {
    key: "M",
    name: "M"
  },
  {
    key: "N",
    name: "N"
  },
  {
    key: "O",
    name: "O"
  },
  {
    key: "P",
    name: "P"
  },
  {
    key: "Q",
    name: "Q"
  },
  {
    key: "R",
    name: "R"
  },
  {
    key: "S",
    name: "S"
  },
  {
    key: "T",
    name: "T"
  },
  {
    key: "U",
    name: "U"
  },
  {
    key: "V",
    name: "V"
  },
  {
    key: "W",
    name: "W"
  },
  {
    key: "X",
    name: "X"
  },
  {
    key: "Y",
    name: "Y"
  },
  {
    key: "Z",
    name: "Z"
  }
];

function Singers(props) {
  const [category, setCategory] = useState("");
  const [alpha, setAlpha] = useState("");

  const dispatch = useDispatch();
  /**
   * 利用useSelector获取redux中的数据
   */
  const {
    list: hotSingerList,
    enterLoading,
    pullUpLoading,
    pullDownLoading
  } = useSelector(state => {
    const { singers } = state;
    return singers;
  }, shallowEqual);

  /**
   * 获取歌手列表数据
   */
  useEffect(() => {
    dispatch(actionTypes.getHotSingerList());
  }, []);

  /**
   * 需要联动列表
   * @param val
   */
  function handleUpdateAlpha(val) {
    dispatch(actionTypes.changeOffset(0));
    dispatch(actionTypes.changeEnterLoading(true));
    dispatch(actionTypes.getSingerList(category, val));
    setAlpha(val);
  }

  function handleUpdateCategory(val) {
    dispatch(actionTypes.changeOffset(0));
    dispatch(actionTypes.changeEnterLoading(true));
    dispatch(actionTypes.getSingerList(val, alpha));
    setCategory(val);
  }

  // 加载更多
  function handlePullUpDispatch() {
    // TODO 2020/4/30 : pull up ui
    dispatch(actionTypes.changePullUpLoading(true));
    if (category === "" && alpha === "") {
      // 加载更多热门
      dispatch(actionTypes.refreshMoreHotSingerList());
    } else {
      dispatch(actionTypes.refreshMoreSingerList(category, alpha));
    }
    dispatch(actionTypes.changePullUpLoading(false));
  }

  // 重新加载
  function handlePullDownDispatch() {
    // TODO 2020/4/30 : 下拉刷新逻辑
    dispatch(actionTypes.changeEnterLoading(true));
    dispatch(actionTypes.getSingerList(category, alpha));
  }

  function enterSingerDetail(id) {
    props.history.push(`/singers/${id}`);
  }

  function singerListRender() {
    return (
      <List>
        {hotSingerList.map(item => {
          return (
            <ListItem onClick={() => enterSingerDetail(item.id)} key={item.id}>
              <div className="img_wrapper">
                <LazyLoad
                  placeholder={
                    <img src={require("../../asserts/avatar.png")} />
                  }
                >
                  <img src={item.picUrl} alt="歌手图片" />
                </LazyLoad>
              </div>
              <span className={"title"}>{item.name}</span>
              <span className="iconfont heart">&#xe6fc;</span>
            </ListItem>
          );
        })}
      </List>
    );
  }

  return (
    // TODO 2020/4/29 :  歌手筛选页面
    <>
      <NavContainer>
        <Horizon
          list={categoryTypes}
          handleClick={handleUpdateCategory}
          title={"分类（默认热门）"}
          curVal={category}
        />
        <Horizon
          list={alphaTypes}
          handleClick={handleUpdateAlpha}
          title={"歌手首字母"}
          curVal={alpha}
        />
      </NavContainer>
      <ListContainer>
        <Scroll
          pullDown={handlePullDownDispatch}
          pullUp={handlePullUpDispatch}
          pullDownLoading={pullDownLoading}
          // pullUpLoading={pullUpLoading}
          onScroll={forceCheck}
        >
          <div style={{ minHeight: "100%" }}>
            {enterLoading ? <Loading /> : singerListRender()}
          </div>
        </Scroll>
      </ListContainer>
      {renderRoutes(props.route.routes)}
    </>
  );
}

export default React.memo(Singers);
