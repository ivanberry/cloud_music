import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRankList } from "./store";

function Rank(props) {
  const { list, loading } = useSelector(({ rank }) => rank);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRankList());
  }, []);

  console.log(list, loading);

  return <h2>Rank</h2>;
}

export default React.memo(Rank);
