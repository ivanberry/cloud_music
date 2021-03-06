/*
 * @Description: Create style.js, Happy Coding.
 * @Author: header.css@gmail.com
 * @Date: 2020/4/29
 */

import styled from "styled-components";
import style from "../../asserts/global-style";

export const NavContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 95px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
`;

export const ListContainer = styled.div`
  position: fixed;
  top: 160px;
  left: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
`;

export const List = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  overflow: hidden;
  .title {
    margin: 10px 0 10px 10px;
    color: ${style["font-color-desc"]};
    font-size: ${style["font-size-s"]};
    flex: 1;
  }
`;

export const ListItem = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 0 5px;
  padding: 5px 0;
  align-items: center;
  border-bottom: 1px solid ${style["border-color"]};
  .img_wrapper {
    margin-right: 20px;
    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
  }
  .name {
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc"]};
    font-weight: 500;
  }
  .iconfont {
    color: ${style["iconfont-red"]};
    font-size: ${style["font-size-s"]};
  }
`;
