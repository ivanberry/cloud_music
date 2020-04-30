import React, { useEffect } from "react";
import { forceCheck } from "react-lazyload";

import Slider from "../../components/slider";
import RecommendList from "../../components/list";
import { Content } from "./style";
import Scroll from "../../components/scroll";

import * as actionTypes from "./store/actionCreators";
import { connect } from "react-redux";
import Loading from "../../components/loading";

function Recommend(props) {
  const {
    bannerList,
    recommendList,
    getBannerDataDispatch,
    getRecommendListDataDispatch,
    enterLoading
  } = props;

  useEffect(() => {
    getBannerDataDispatch();
    getRecommendListDataDispatch();
  }, []);

  return (
    <Content>
      {enterLoading ? (
        <Loading />
      ) : (
        <Scroll onScroll={forceCheck}>
          <div>
            <Slider bannerList={bannerList || []} />
            <RecommendList recommendList={recommendList || []} />
          </div>
        </Scroll>
      )}
    </Content>
  );
}

// 映射state为组件props
const mapStateToProps = state => {
  const {
    recommend: { bannerList, recommendList, enterLoading }
  } = state;
  return {
    bannerList,
    recommendList,
    enterLoading
  };
};

// 映射部分dispatch为组件props
const mapDispatchToProps = dispatch => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Recommend));
