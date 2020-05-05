/*
 * @Description: Create index.js, Happy Coding.
 * @Author: header.css@gmail.com
 * @Date: 2020/5/3
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import {
  ByLayer,
  CollectButton,
  Container,
  ImgWrapper,
  SongListWrapper
} from "./style";
import Header from "../../baseUI/header";
import Scroll from "../../components/scroll";
import SongsList from "../SongList";
import { HEADER_HEIGHT } from "../Album";

const artist = {
  picUrl:
    "https://p2.music.126.net/W__FCWFiyq0JdPtuLJoZVQ==/109951163765026271.jpg",
  name: "薛之谦",
  hotSongs: [
    {
      name: "我好像在哪见过你",
      ar: [{ name: "薛之谦" }],
      al: {
        name: "薛之谦专辑"
      }
    },
    {
      name: "我好像在哪见过你",
      ar: [{ name: "薛之谦" }],
      al: {
        name: "薛之谦专辑"
      }
    },
    {
      name: "我好像在哪见过你",
      ar: [{ name: "薛之谦" }],
      al: {
        name: "薛之谦专辑"
      }
    },
    {
      name: "我好像在哪见过你",
      ar: [{ name: "薛之谦" }],
      al: {
        name: "薛之谦专辑"
      }
    },
    {
      name: "我好像在哪见过你",
      ar: [{ name: "薛之谦" }],
      al: {
        name: "薛之谦专辑"
      }
    },
    {
      name: "我好像在哪见过你",
      ar: [{ name: "薛之谦" }],
      al: {
        name: "薛之谦专辑"
      }
    },
    {
      name: "我好像在哪见过你",
      ar: [{ name: "薛之谦" }],
      al: {
        name: "薛之谦专辑"
      }
    },
    {
      name: "我好像在哪见过你",
      ar: [{ name: "薛之谦" }],
      al: {
        name: "薛之谦专辑"
      }
    },
    {
      name: "我好像在哪见过你",
      ar: [{ name: "薛之谦" }],
      al: {
        name: "薛之谦专辑"
      }
    },
    {
      name: "我好像在哪见过你",
      ar: [{ name: "薛之谦" }],
      al: {
        name: "薛之谦专辑"
      }
    },
    {
      name: "我好像在哪见过你",
      ar: [{ name: "薛之谦" }],
      al: {
        name: "薛之谦专辑"
      }
    },
    {
      name: "我好像在哪见过你",
      ar: [{ name: "薛之谦" }],
      al: {
        name: "薛之谦专辑"
      }
    }
    // 省略 20 条
  ]
};

function Singer(props) {
  const [showStatus, setShowStatus] = useState(true);

  // handle back
  function handleBack() {
    props.history.goBack();
  }

  // handle scroll
  function handleScroll(pos) {
    // TODO 2020/5/5 : 根据pos不同有一些操作
    // 隐藏 collect button
    console.log("pos: ", pos);
    const headerDom = header.current;
    const collectButtonDom = collectButton.current;
    const imgWrapperDom = imageWrapper.current;
    const imgWrapperHeight = imgWrapperDom.getBoundingClientRect().height;
    const y = pos.y;

    const minScrollY = -(imgWrapperHeight - OFFSET) + HEADER_HEIGHT;

    // 滑动相对图片的高度百分比
    const percent = Math.abs(y / imgWrapperHeight);

    if (y > 0) {
      // 下拉图片放大
      imgWrapperDom.style.transform = `scale(${1 + percent})`;

      // 按钮下移
      collectButtonDom.style.transform = `translate3d(0, ${y}px, 0)`;
    } else if (y >= minScrollY) {
      collectButtonDom.style.transform = `translate3d(0, ${y}px, 0)`;
      collectButtonDom.style.opacity = `${1 - percent * 2}`;
    } else if (y < minScrollY) {
      // 往上移动，超过header
      // 设置一个渐变的header颜色
    }
  }

  const setShowStatusFalse = useCallback(() => {
    setShowStatus(false);
  }, []);

  // 歌单滚动容器
  const header = useRef();
  const collectButton = useRef();
  const imageWrapper = useRef();
  const songsScrollWrapper = useRef();
  const songsScroll = useRef();

  const OFFSET = 5;

  useEffect(() => {
    const h = imageWrapper.current.offsetHeight;
    songsScrollWrapper.current.style.top = `${h - OFFSET}px`;

    console.log(songsScroll);
    // songsScroll.current.refresh();
  });

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      unmountOnExit
      appear={true}
      onExited={props.history.goBack}
    >
      <Container>
        <Header ref={header} hitle={"头部"} handleClick={handleBack} />
        <ImgWrapper bgUrl={artist.picUrl} ref={imageWrapper} />
        <CollectButton ref={collectButton}>
          <i className="iconfont">&#xe62d;</i>
          <span className="text">收藏</span>
        </CollectButton>
        {/*<ByLayer/>*/}
        <SongListWrapper ref={songsScrollWrapper}>
          <Scroll ref={songsScroll} onScroll={handleScroll}>
            <SongsList
              showBackground={true}
              songs={artist.hotSongs}
              showCollect={false}
            />
          </Scroll>
        </SongListWrapper>
      </Container>
    </CSSTransition>
  );
}

export default React.memo(Singer);
