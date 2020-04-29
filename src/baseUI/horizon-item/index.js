/*
 * @Description: Create index.js, Happy Coding.
 * @Author: header.css@gmail.com
 * @Date: 2020/4/29
 */
import React, {useCallback, useEffect, useRef} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Scroll from "../../components/scroll";

import style from "../../asserts/global-style";

function Horizon(props) {
  const { list, curVal, title, handleClick } = props;

  const category = useRef(null);

  // TODO 2020/4/29 :  初始化内容容器宽度，使其跟内容绑定
  useEffect(() => {
    let categoryDOM = category.current;
    let tagElems = categoryDOM.querySelectorAll("span");
    let totalWidth = 0;
    Array.from(tagElems).forEach(el => {
      totalWidth += el.offsetWidth;
    });
    categoryDOM.style.width = `${totalWidth}px`;
  }, []);

  // TODO 2020/4/29 : 为什么每次调用组件，都会渲染两次呢？
  console.log('xxx', curVal);

  // TODO 2020/4/29 : 如何优化onClick导致的回调产生的多次渲染
  return (
    <Scroll direction="horizontal">
      {/* div必须设置宽度，超出wrapper宽度才能滑动*/}
      <div ref={category}>
        <List>
          <span>{title}</span>
          {list.map(item => {
            return (
              <ListItem
                key={item.key}
                className={`${curVal === item.key ? "selected" : ""}`}
                onClick={() => handleClick(item.key)}
                onTouchEnd={() => handleClick(item.key)}
              >
                {item.name}
              </ListItem>
            );
          })}
        </List>
      </div>
    </Scroll>
  );
}

const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  > span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    color: grey;
    font-size: ${style["font-size-m"]};
    vertical-align: middle;
  }
`;

const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style["font-size-m"]};
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    color: ${style["theme-color"]};
    border: 1px solid ${style["theme-color"]};
    opacity: 0.8;
  }
`;

Horizon.defaultProps = {
  list: [],
  curVal: "",
  title: "",
  handleClick: null
};

Horizon.propTypes = {
  list: PropTypes.array,
  curVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func
};

export default Horizon;
