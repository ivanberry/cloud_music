/*
 * @Description: Create style.js, Happy Coding.
 * @Author: guoyuan@icarbonx.com
 * @Date: 2020/4/28
 */

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import PropTypes from "prop-types";
import BScroll from "better-scroll";
import { ScrollContainer } from "./style";

const Scroll = forwardRef((props, ref) => {
  // TODO 2020/4/28 tab: 编写组件
  const [bScroll, setBScroll] = useState();
  const scrollContainerRef = useRef();

  const {
    direction,
    click,
    refresh,
    pullUpLoading,
    pullDownLoading,
    bounceTop,
    bounceBottom,
    pullUp,
    pullDown,
    onScroll
  } = props;

  // create better-scroll instance
  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
      scrollX: direction === "horizontal",
      scrollY: direction === "vertical",
      probeType: 3,
      click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    };
  }, []);

  // 需要刷新
  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  // 给实例绑定scroll事件
  useEffect(
    () => {
      if (!bScroll || !onScroll) return;
      bScroll.on("scroll", scroll => {
        onScroll(scroll);
      });
      return () => {
        bScroll.off("scroll");
      };
    },
    [onScroll, bScroll]
  );

  useEffect(
    () => {
      if (!bScroll || !pullUp) return;
      bScroll.on("scrollEnd", () => {
        // 是否到底部
        if (bScroll.y <= bScroll.maxScrllY + 100) {
          pullUp();
        }
      });
      return () => {
        bScroll.off("scrollEnd");
      };
    },
    [bScroll, pullUp]
  );

  useEffect(
    () => {
      if (!bScroll || !pullDown) return;
      bScroll.on("touchEnd", pos => {
        if (pos.y > 50) {
          pullDown();
        }
      });
      return () => {
        bScroll.off("touchEnd");
      };
    },
    [bScroll, pullDown]
  );

  // 暴露组件方法
  useImperativeHandle(ref, () => ({
    refresh: () => {
      scrollContainerRef.current.refresh();
    },
    getBScroll: () => bScroll
  }));

  // TODO 2020/4/28 tab: UI
  return (
    <ScrollContainer ref={scrollContainerRef}>{props.children}</ScrollContainer>
  );
});

Scroll.propTypes = {
  direction: PropTypes.oneOf(["vertical", "horizontal"]), // 滚动的方向
  click: true, // 是否支持点击
  refresh: PropTypes.bool, // 是否刷新
  onScroll: PropTypes.func, // 滑动触发的回调函数
  pullUp: PropTypes.func, // 上拉加载逻辑
  pullDown: PropTypes.func, // 下拉加载逻辑
  pullUpLoading: PropTypes.bool, // 是否显示上拉 loading 动画
  pullDownLoading: PropTypes.bool, // 是否显示下拉 loading 动画
  bounceTop: PropTypes.bool, // 是否支持向上吸顶
  bounceBottom: PropTypes.bool // 是否支持向下吸底
};

Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true
};

export default Scroll;
