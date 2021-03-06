import React from "react";
import LazyLoad from "react-lazyload";
import { ListWrapper, ListItem, List } from "./style";
import { getCount } from "../../api/utils";
import { Link, withRouter } from "react-router-dom";

function RecommendList(props) {
  const { recommendList } = props;

  const enterDetail = id => {
    props.history.push(`/recommend/${id}`);
  };

  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {recommendList.map((item, index) => {
          return (
            <ListItem onClick={() => enterDetail(item.id)} key={item.id}>
              <div className="img_wrapper">
                <div className="decorate" />
                <LazyLoad
                  placeholder={
                    <img
                      width={"100%"}
                      height={"100%"}
                      src={require("../../asserts/music.png")}
                      alt={"推荐列表占位图"}
                    />
                  }
                >
                  <img
                    src={`${item.picUrl}?param=140y140`}
                    width="100%"
                    height="100%"
                    alt="推荐图片"
                  />
                </LazyLoad>
                <div className="play_count">
                  <i className="iconfont play">&#xe885;</i>
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          );
        })}
      </List>
    </ListWrapper>
  );
}

export default React.memo(withRouter(RecommendList));
