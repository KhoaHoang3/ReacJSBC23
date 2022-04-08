import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./Reducers/GioHangReducer";
import { stateNumber } from "./Reducers/NumberReducer";
import { stateImgCar } from "./Reducers/stateImgCarReducer";

const rootReducer = combineReducers({
  // stateImgCar: stateImgCar,
  gioHangReducer:gioHangReducer,
});
//  Các state dự án sẽ được khai báo tại đây

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
