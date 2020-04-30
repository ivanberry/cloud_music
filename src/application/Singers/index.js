import React, { useCallback, useEffect, useState } from "react";
import LazyLoad, { forceCheck } from "react-lazyload";

import Horizon from "../../baseUI/horizon-item";
import { List, ListContainer, NavContainer } from "./style";
import Scroll from "../../components/scroll";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { actionTypes } from "./store";

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

function Singers() {
  const [category, setCategory] = useState("");
  const [alpha, setAlpha] = useState("");

  const dispatch = useDispatch();
  /**
   * 利用useSelector获取redux中的数据
   */
  const hotSingerList = useSelector(state => {
    const { singers } = state;
    return singers.list;
  }, shallowEqual);

  /**
   * 获取歌手列表数据
   */
  useEffect(() => {
    dispatch(actionTypes.getHotSingerList());
  }, []);

  function handleUpdateAlpha(val) {
    setAlpha(val);
  }

  function handleUpdateCategory(val) {
    setCategory(val);
  }

  function singerListRender() {
    return (
      <List>
        {hotSingerList.map(item => {
          return (
            <div key={item.id}>
              <LazyLoad
                placeholder={<img src={require("../../asserts/avatar.png")} />}
              >
                <img src={item.picUrl} alt="歌手图片" />
              </LazyLoad>
              <span className={"title"}>{item.name}</span>
              <span className="iconfont heart">&#xe6fc;</span>
            </div>
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
        <Scroll onScroll={forceCheck}>
          <div>{singerListRender()}</div>
        </Scroll>
      </ListContainer>
    </>
  );
}

export default React.memo(Singers);
