/*
 * @Description: Create index.js, Happy Coding.
 * @Author: guoyuan@icarbonx.com
 * @Date: 2020/4/28
 */
import styled from "styled-components";

export const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PullDownLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 2;
`;

export const PullUpLoader = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  width: 100px;
  height: 100px;
  margin: auto;
  z-index: 2;
`;
