import { combineReducers } from "redux";
import { reducer as recommendReducer } from "../application/Recommend/store";

//组合所有的reducer
export default combineReducers({
  recommend: recommendReducer
});
