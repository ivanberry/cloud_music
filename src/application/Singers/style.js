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
  div {
    margin: 2px 6px;
    padding: 10px 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .iconfont{
    color: ${style["iconfont-red"]};
    font-size: ${style["font-size-s"]};
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
  .title {
    margin: 10px 0 10px 10px;
    color: ${style["font-color-desc"]};
    font-size: ${style["font-size-s"]};
    flex: 1;
  }
`;
