/*
 * @Description: Create index.js, Happy Coding.
 * @Author: header.css@gmail.com
 * @Date: 2020/5/3
 */

import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { CollectButton, Container, ImgWrapper, SongListWrapper } from "./style";
import Header from "../../baseUI/header";
import Scroll from "../../components/scroll";
import SongsList from "../SongList";

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
  function handleBack() {
    props.history.goBack();
  }

  // 歌单滚动容器
  const imageWrapper = useRef();
  const songsScrollWrapper = useRef();
  const songsScroll = useRef();

  const OFFSET = 5;

  useEffect(() => {
    const h = imageWrapper.current.offsetHeight;
    songsScrollWrapper.current.style.top = `${h + OFFSET}px`;

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
        <Header title={"头部"} handleClick={handleBack} />
        <ImgWrapper bgUrl={artist.picUrl} ref={imageWrapper} />
        <CollectButton>
          <i className="iconfont">&#xe62d;</i>
          <span className="text">收藏</span>
        </CollectButton>
        <SongListWrapper ref={songsScrollWrapper}>
          <Scroll ref={songsScroll}>
            <SongsList songs={artist.hotSongs} showCollect={false} />
          </Scroll>
        </SongListWrapper>
      </Container>
    </CSSTransition>
  );
}

export default React.memo(Singer);
