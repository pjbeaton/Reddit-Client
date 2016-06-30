import delay from './delay';
import fetch from 'isomorphic-fetch';

// This file mocks a web API by working with the hard-coded data included above.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

class RedditApi {
  static getAllHotPosts() {
    const posts = fetch('https://www.reddit.com/hot.json?limit=25');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], 
        posts.then(response => response.json())));
      }, delay);
    });
  }



}

export default RedditApi;
