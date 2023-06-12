import { combineReducers } from 'redux';

import frameReducer from "./frame/frameSlice";
import templateReducer from './template/templateSlice';

const rootReducer = combineReducers({
  frame: frameReducer,
  template: templateReducer,
})

export default rootReducer;