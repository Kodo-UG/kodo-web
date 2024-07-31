import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import { displaySuccessNotification } from "../../utils/Toast";

const CommentForm = ({ onCommentSubmit }) => {
	const [text, setText] = useState("");
	const [loading, setLoading] = useState(false);
	const { id } = useParams();

	const handleInputChange = (setState) => (event) => {
		setState(event.target.value);
	};

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
	};

	const postComment = async () => {
		setLoading(true);
		try {
			const res = await axios.post(
				`${BASE_URL}/user/add/comment`,
				{
					id,
					comment: text
				},
				config
			);
			console.log(res.data);
			if (res.status === 200) {
				displaySuccessNotification(res.data.message);
			}
			setText("");
			onCommentSubmit();
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const commentStyle = {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		padding: "10px",
		marginBottom: "20px",
		backgroundColor: "#fff",
		borderRadius: "5px",
		marginTop: "20px"
	};

	const userImageStyle = {
		width: "50px",
		height: "50px",
		marginRight: "10px",
		borderRadius: "50%",
		objectFit: "cover"
	};

	return (
		<div style={commentStyle}>
			<div>
				<img
					// src={`https://ui-avatars.com/api/name=Baluku Wilton&background=random`}
					src="https://kodofiles.s3.eu-north-1.amazonaws.com/images.png"
					alt="User"
					style={userImageStyle}
				/>
			</div>

			<div style={{ flex: 1 }}>
				<h3 style={{ fontSize: "16px", marginBottom: "10px" }}>
					Add a Comment
				</h3>

				<textarea
					placeholder="Your Comment"
					value={text}
					onChange={handleInputChange(setText)}
					style={{
						width: "100%",
						height: "7rem",
						padding: "10px",
						marginBottom: "10px",
						border: "1px solid #ccc",
						borderRadius: "5px",
						resize: "none"
					}}
				/>
				<button
					onClick={() => postComment()}
					style={{
						backgroundColor: "#EC1D64",
						color: "#fff",
						border: "none",
						borderRadius: "5px",
						padding: "5px 10px",
						cursor: "pointer"
					}}
				>
					{loading ? "loading..." : "comment"}
				</button>
			</div>
		</div>
	);
};

export default CommentForm;
