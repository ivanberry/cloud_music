import React from "react";
import Slider from "../../components/slider";
import RecommendList from "../../components/list";

function Recommend() {
  // mock data
  const bannerList = [1, 2, 3, 4].map(item => {
    return {
      imageUrl:
        "http://p1.music.126.net/9SLtTHB8Fz4txaNmMiThBA==/109951164941385278.jpg?imageView&quality=89"
    };
  });

  const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
    return {
      id: 1,
      picUrl:
        "http://p2.music.126.net/BJlS7xkjLhNMtDLm8CXMJQ==/109951164864116863.jpg",
      playCount: 17171122,
      name: "朴树、许巍、李健、郑钧、老狼、赵雷"
    };
  });

  return (
    <>
      <Slider bannerList={bannerList} />
      <RecommendList recommendList={recommendList} />
    </>
  );
}

export default React.memo(Recommend);
