import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from '../../actions/hotPostActions';
import PostList from './PostList';
import {browserHistory} from 'react-router';

class PostsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {posts} = this.props;
    
    return (
      <div>
        <h1>Hot Posts</h1>
        <PostList posts={posts}/>
      </div>
    );
  }
}

PostsPage.propTypes = {
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.hotPosts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
