import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a variety of other helpful libraries to 
          pull the top posts on Reddit.  This was done as a learning exercise starting with the Pluralsight
          course by Cory House <a href="https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents">here</a>.  
          Also referenced is the Reddit API Example on the <a href="http://redux.js.org/docs/advanced/ExampleRedditAPI.html">Redux tutorials</a>. </p>
      </div>
    );
  }
}

export default AboutPage;
