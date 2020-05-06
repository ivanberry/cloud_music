import { combineReducers } from "redux";
import { reducer as recommendReducer } from "../application/Recommend/store";
import { reducer as singersReducer } from "../application/Singers/store";
import { reducer as albumReducer } from "../application/Album/store";
import { reducer as artistReducer } from "../application/Singer/store";

//组合所有的reducer
export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  album: albumReducer,
  singer: artistReducer
});
