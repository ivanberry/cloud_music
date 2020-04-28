import React, { useEffect } from "react";
import Slider from "../../components/slider";
import RecommendList from "../../components/list";
import { Content } from "./style";
import Scroll from "../../components/scroll";

import * as actionTypes from "./store/actionCreators";
import { connect } from "react-redux";

function Recommend(props) {
  const {
    bannerList,
    recommendList,
    getBannerDataDispatch,
    getRecommendListDataDispatch
  } = props;

  useEffect(() => {
    getBannerDataDispatch();
    getRecommendListDataDispatch();
  }, []);

  return (
    <Content>
      <Scroll>
        <div>
          <Slider bannerList={bannerList || []} />
          <RecommendList recommendList={recommendList || []} />
        </div>
      </Scroll>
    </Content>
  );
}

// 映射state为组件props
const mapStateToProps = state => {
  const {
    recommend: { bannerList, recommendList }
  } = state;
  return {
    bannerList,
    recommendList
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
