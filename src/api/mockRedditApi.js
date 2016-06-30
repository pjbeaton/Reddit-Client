import delay from './delay';
import * as hotPosts from './hotPosts';

// This file mocks a web API by working with the hard-coded data included above.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

class RedditApi {
  static getAllHotPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], 
        hotPosts.hotPosts));
      }, delay);
    });
  }

}

export default RedditApi;
