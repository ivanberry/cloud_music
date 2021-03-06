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
import { useDispatch, useSelector } from "react-redux";
import { changeEnterLoading, getSingerInfo } from "./store/actionCreator";
import Loading from "../../components/loading";

function Singer(props) {
  const [showStatus, setShowStatus] = useState(true);
  const id = props.match.params.id;
  const dispatch = useDispatch();

  const { artist, songs, loading } = useSelector(state => {
    const { singer } = state;
    return singer;
  });

  function handleBack() {
    props.history.goBack();
  }

  // handle scroll
  function handleScroll(pos) {
    // TODO 2020/5/5 : 根据pos不同有一些操作
    // 隐藏 collect button
    const height = imageWrapperInitialHeight.current;
    const collectButtonDom = collectButton.current;
    const imgWrapperDom = imageWrapper.current;
    const y = pos.y;

    const minScrollY = -(height - OFFSET) + HEADER_HEIGHT;

    // 滑动相对图片的高度百分比
    const percent = Math.abs(y / height);

    if (y > 0) {
      // 下拉
      imgWrapperDom.style.transform = `scale(${1 + percent})`;
      collectButtonDom.style.transform = `translate3d(0, ${y}px, 0)`;
    } else if (y >= minScrollY) {
      // 上滑，不超过header
      imgWrapperDom.style.paddingTop = "75%";
      imgWrapperDom.style.height = 0;
      imgWrapperDom.style.zIndex = -1;

      collectButtonDom.style.transform = `translate3d(0, ${y}px, 0)`;
      collectButtonDom.style.opacity = `${1 - percent * 2}`;
    } else if (y < minScrollY) {
      // 上滑， 并超过header
      imgWrapperDom.style.paddingTop = 0;
      imgWrapperDom.style.zIndex = 51;
      imgWrapperDom.style.height = `${HEADER_HEIGHT}px`;
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
  const imageWrapperInitialHeight = useRef(0);

  const OFFSET = 5;

  useEffect(() => {
    const h = imageWrapper.current.offsetHeight;
    songsScrollWrapper.current.style.top = `${h - OFFSET}px`;

    imageWrapperInitialHeight.current = h;
  });

  useEffect(
    () => {
      dispatch(changeEnterLoading(true));
      dispatch(getSingerInfo(id));
    },
    [id]
  );

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
        <Header ref={header} title={"头部"} handleClick={handleBack} />
        {loading ? <Loading /> : null}
        <ImgWrapper bgUrl={artist?.picUrl} ref={imageWrapper} />
        <CollectButton ref={collectButton}>
          <i className="iconfont">&#xe62d;</i>
          <span className="text">收藏</span>
        </CollectButton>
        <ByLayer />
        <SongListWrapper ref={songsScrollWrapper}>
          <Scroll ref={songsScroll} onScroll={handleScroll}>
            <SongsList
              showBackground={true}
              songs={songs}
              showCollect={false}
            />
          </Scroll>
        </SongListWrapper>
      </Container>
    </CSSTransition>
  );
}

export default React.memo(Singer);
