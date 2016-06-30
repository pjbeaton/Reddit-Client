import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PostListRow = ({post}) => {
  return (
    <tr>
      <td>
        <img className="thumbnail" src={post.thumbnail} alt="post thumbnail"/>
      </td>
      <td>
        <span className="badge">{post.score}</span>
      </td>
      <td className="lead">
        <a href={post.url}>{post.title}</a>
      </td>
      <td>{post.author}</td>
      <td>{post.subreddit}</td>
    </tr>
  );
};

PostListRow.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostListRow;
