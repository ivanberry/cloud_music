/*
 * @Description: Create style.js, Happy Coding.
 * @Author: guoyuan@icarbonx.com
 * @Date: 2020/4/28
 */

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from "react";
import PropTypes from "prop-types";
import BScroll from "better-scroll";
import { PullDownLoader, PullUpLoader, ScrollContainer } from "./style";
import Loading from "../../baseUI/loading";
import { debounce } from "../../api/utils";
import LoadingV2 from "../../baseUI/loading-v2";

const Scroll = forwardRef((props, ref) => {
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

  const pullUpDebounce = useMemo(
    () => {
      return debounce(pullUp, 300);
    },
    [pullUp]
  );

  const pullDownDebounce = useMemo(
    () => {
      return debounce(pullDown, 300);
    },
    [pullDown]
  );

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
      const handlePullUp = () => {
        if (bScroll.y <= bScroll.maxScrollY + 100) {
          pullUpDebounce();
        }
      };

      bScroll.on("scrollEnd", handlePullUp);
      return () => {
        bScroll.off("scrollEnd", handlePullUp);
      };
    },
    [bScroll, pullUp, pullUpDebounce]
  );

  useEffect(
    () => {
      if (!bScroll || !pullDown) return;
      const handlePullDown = pos => {
        if (pos.y > 50) {
          pullDownDebounce();
        }
      };
      bScroll.on("touchEnd", handlePullDown);
      return () => {
        bScroll.off("touchEnd", handlePullDown);
      };
    },
    [bScroll, pullDown, pullDownDebounce]
  );

  // 暴露组件方法
  useImperativeHandle(ref, () => ({
    refresh: () => {
      scrollContainerRef.current.refresh();
    },
    getBScroll: () => bScroll
  }));

  const pullUpDisplayStyle = pullUpLoading
    ? { display: "" }
    : { display: "none" };
  const pullDownDisplayStyle = pullDownLoading
    ? { display: "" }
    : { display: "none" };

  return (
    <ScrollContainer ref={scrollContainerRef}>
      {props.children}
      <PullDownLoader style={pullDownDisplayStyle}>
        <Loading />
      </PullDownLoader>
      <PullUpLoader style={pullUpDisplayStyle}>
        <LoadingV2 />
      </PullUpLoader>
    </ScrollContainer>
  );
});

Scroll.propTypes = {
  direction: PropTypes.oneOf(["vertical", "horizontal"]), // 滚动的方向
  // click: true, // 是否支持点击
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
  // click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true
};

export default Scroll;
