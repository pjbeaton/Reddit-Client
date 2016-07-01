import {combineReducers} from 'redux';
import hotPosts from './hotPostReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  hotPosts,
  ajaxCallsInProgress
});

export default rootReducer;
