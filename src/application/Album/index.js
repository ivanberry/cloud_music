/*
 * @Description: Create index.js, Happy Coding.
 * @Author: header.css@gmail.com
 * @Date: 2020/5/1
 */

import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { Container, Menu, SongItem, SongList, TopDesc } from "./style";
import Header from "../../baseUI/header";
import Scroll from "../../components/scroll";
import { getCount, getName } from "../../api/utils";
import style from "../../asserts/global-style";

const HEADER_HEIGHT = 45;

function Album(props) {
  const [showStatus, setShowStatus] = useState(true);
  const [isMarquee, setIsMarquee] = useState(false);
  const [title, setTitle] = useState("歌单");

  const handleBack = () => {
    setShowStatus(false);
  };

  const handleScroll = pos => {
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
  };

  //mock 数据
  const currentAlbum = {
    creator: {
      avatarUrl:
        "http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg",
      nickname: "浪里推舟"
    },
    coverImgUrl:
      "http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg",
    subscribedCount: 2010711,
    name: "听完就睡，耳机是天黑以后柔软的梦境",
    tracks: [
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{ name: "张学友" }, { name: "周华健" }],
        al: {
          name: "学友 热"
        }
      }
    ]
  };

  const headerEl = useRef();

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
                    <img src={currentAlbum.creator.avatarUrl} alt="歌手图" />
                  </div>
                  <div className="name">{currentAlbum.creator.nickname}</div>
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
            <SongList>
              <div className="first_line">
                <div className="play_all">
                  <i className="iconfont">&#xe6e3;</i>
                  <span>
                    播放全部{" "}
                    <span className="sum">
                      (共 {currentAlbum.tracks.length})
                    </span>
                  </span>
                </div>
                <div className="add_list">
                  <i className="iconfont">&#xe62d;</i>
                  <span>收藏 ({getCount(currentAlbum.subscribedCount)})</span>
                </div>
              </div>
              <SongItem>
                {currentAlbum.tracks.map((item, index) => {
                  return (
                    <li key={index}>
                      <span className="index">{index + 1}</span>
                      <div className="info">
                        <span>{item.name}</span>
                        <span>
                          {getName(item.ar)}-{item.al.name}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </SongItem>
            </SongList>
          </div>
        </Scroll>
      </Container>
    </CSSTransition>
  );
}

export default React.memo(Album);
