import React from "react";
import Comment from "./Comment";
import TimeAgo from './TimeAgo';


const CommentsList = ({ comments }) => {
	return (
		<div className="mt-5">
			{comments.map((comment, index) => (
				<Comment
					key={index}
					username={comment.user.fname + " " + comment.user.lname}
					timestamp={<TimeAgo dateString={comment.commentedAt} />}
					text={comment.text}
				/>
			))}
		</div>
	);
};

export default CommentsList;
