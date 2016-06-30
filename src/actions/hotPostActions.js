import RedditApi from '../api/mockRedditApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadHotPostsSuccess(hotPosts) {
  return {type: types.LOAD_HOT_POSTS_SUCCESS, hotPosts};
}

export function loadHotPosts() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return RedditApi.getAllHotPosts().then(hotPosts => {
      dispatch(loadHotPostsSuccess(hotPosts));
    }).catch(error => {
      throw(error);
    });
  };
}
