import fetch from 'isomorphic-fetch';

// This file is used to call the actual Reddit API.  
// This uses Promises to call the API asynchronously. 
// However, I am not getting the data back to the action 
// in the correct format, so I am not using this currently. 


class RedditApi {
  static getAllHotPosts() {
    const posts = fetch('https://www.reddit.com/hot.json?limit=25');
    return new Promise((resolve, reject) => {
        resolve(
          Object.assign([], 
          fetch('https://www.reddit.com/hot.json?limit=25').then(response => response.json())
          )
        );
        reject("Error occurred when attempting to read the reddit api");
    });
  }



}

export default RedditApi;
