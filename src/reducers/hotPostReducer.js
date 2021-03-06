import * as types from '../actions/actionTypes';
import initialState from './initialState';

//TODO: Standardize the posts to be generic, then add additional actions 
//  to pull different lists from the Reddit API.
export default function hotPostReducer(state = initialState.hotPosts, action) {
  switch (action.type) {
    case types.LOAD_HOT_POSTS_SUCCESS:
      return action.hotPosts;

    default:
      return state;
  }
}
