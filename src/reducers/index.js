import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import hotPosts from './hotPostReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  hotPosts,
  ajaxCallsInProgress
});

export default rootReducer;
