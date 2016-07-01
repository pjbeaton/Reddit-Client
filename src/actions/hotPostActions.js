//import RedditApi from '../api/mockRedditApi';
import RedditApi from '../api/redditApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadHotPostsSuccess(json) {
  const posts = json.data.children.map(post => post.data);
  const sortedPosts = Object.assign([], 
      posts.sort((a,b) => b.score - a.score));
  return {type: types.LOAD_HOT_POSTS_SUCCESS, 
          hotPosts: sortedPosts};
}

//  This function should be calling the API to retrieve the Reddit data, but 
//  I haven't been able to get this working correctly yet.

// export function loadHotPosts() {
//   return dispatch => {
//     dispatch(beginAjaxCall());
//     return RedditApi.getAllHotPosts().then(hotPosts => {
//       dispatch(loadHotPostsSuccess(hotPosts));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

// Load hot posts from Reddit.  Need to add additional actions to pull more data and 
// a parameter to allow the application to set how many posts to pull back.
export function loadHotPosts() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return fetch('https://www.reddit.com/hot.json?limit=25')
      .then(response => response.json())
      .then(hotPosts => dispatch(loadHotPostsSuccess(hotPosts)));
  };
}

