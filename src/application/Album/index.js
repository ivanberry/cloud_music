/*
 * @Description: Create index.js, Happy Coding.
 * @Author: header.css@gmail.com
 * @Date: 2020/5/1
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { Container, Menu, TopDesc } from "./style";
import Header from "../../baseUI/header";
import Scroll from "../../components/scroll";
import style from "../../asserts/global-style";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../baseUI/loading";
import { getAlbumList } from "./store/actionCreator";
import SongsList from "../SongList";

export const HEADER_HEIGHT = 45;

function Album(props) {
  const [showStatus, setShowStatus] = useState(true);
  const [isMarquee, setIsMarquee] = useState(false);
  const [title, setTitle] = useState("歌单");

  const dispatch = useDispatch();
  const id = props.match.params.id;

  const currentAlbum = useSelector(state => {
    const { album } = state;
    return album.detail;
  });

  const { enterLoading } = currentAlbum;

  useEffect(
    () => {
      dispatch(getAlbumList(id));
    },
    [id]
  );

  // 函数属性可以利用useCallback包裹，可以减少因为每次父组件
  // 执行时，生成了不同的匿名函数
  const handleBack = useCallback(() => {
    setShowStatus(false);
  }, []);

  const handleScroll = useCallback(
    pos => {
      let minScrollY = -HEADER_HEIGHT;
      let percent = Math.abs(pos.y / minScrollY);
      let headerDom = headerEl.current;

      if (pos.y < minScrollY) {
        headerDom.style.background = style["theme-color"];
        headerDom.style.opacity = Math.min(1, (percent - 1) / 2);
        setTitle(currentAlbum.name);
        setIsMarquee(true);
      } else {
        headerDom.style.backgroundColor = "";
        headerDom.style.opacity = 1;
        setTitle("歌单");
        setIsMarquee(false);
      }
    },
    [currentAlbum]
  );

  const headerEl = useRef();

  const songListProps = {
    songs: currentAlbum.tracks,
    showStatus: true,
    showBackground: true,
    showCollect: true,
    collectCount: currentAlbum.subscribedCount
  };

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={props.history.goBack}
    >
      <Container>
        <Header
          ref={headerEl}
          handleClick={handleBack}
          title={title}
          isMarquee={isMarquee}
        />
        {enterLoading ? (
          <Loading />
        ) : (
          <Scroll bounceTop={false} onScroll={handleScroll}>
            <div>
              <TopDesc background={currentAlbum.coverImgUrl}>
                <div className="background">
                  <div className="filter" />
                </div>
                <div className="img_wrapper">
                  <div className="decorate" />
                  <img src={currentAlbum.coverImgUrl} alt="专辑图" />
                  <div className="play_count">
                    <i className="iconfont play">&#xe885;</i>
                    <span className="count">
                      {Math.floor(currentAlbum.subscribedCount)}
                    </span>
                  </div>
                </div>
                <div className="desc_wrapper">
                  <div className="title">{currentAlbum.name}</div>
                  <div className="person">
                    <div className="avatar">
                      <img src={currentAlbum.creator?.avatarUrl} alt="歌手图" />
                    </div>
                    <div className="name">{currentAlbum.creator?.nickname}</div>
                  </div>
                </div>
              </TopDesc>
              <Menu>
                <div>
                  <i className="iconfont">&#xe6ad;</i>
                  评论
                </div>
                <div>
                  <i className="iconfont">&#xe86f;</i>
                  点赞
                </div>
                <div>
                  <i className="iconfont">&#xe62d;</i>
                  收藏
                </div>
                <div>
                  <i className="iconfont">&#xe606;</i>
                  更多
                </div>
              </Menu>
              <SongsList {...songListProps} />
            </div>
          </Scroll>
        )}
      </Container>
    </CSSTransition>
  );
}

export default React.memo(Album);
