import React from 'react';
import Comment from './Comment';

const CommentsList = ({ comments }) => {
  return (
    <div className="mt-5">
      {comments.map((comment, index) => (
        <Comment
          key={index}
          username={comment.username}
          timestamp={comment.timestamp}
          text={comment.text}
        />
      ))}
    </div>
  );
};

export default CommentsList;