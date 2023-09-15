import React, { useState } from "react";

const CommentForm = ({ onCommentSubmit }) => {
  const [text, setText] = useState("");

  const handleCommentSubmit = () => {
    if (text) {
      const newComment = {
        timestamp: new Date().toLocaleString(),
        text,
      };
      onCommentSubmit(newComment);
      setText("");
    }
  };

  // Styles...
  const commentStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    padding: "10px",
    marginBottom: "20px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    marginTop: "20px",
  };

  const userImageStyle = {
    width: "50px",
    height: "50px",
    marginRight: "10px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  return (
    <div style={commentStyle}>
      <div >
        <img
          src={`https://ui-avatars.com/api/name=Baluku Wilton&background=random`}
          alt="User"
          style={userImageStyle}
        />
      </div>

      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Add a Comment
        </h3>

        <textarea
          placeholder="Your Comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        //   onFocus={(e) => (e.target.style.borderColor = "#EC1D64")} 
          style={{
            width: "100%",
            height: "7rem",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            resize: "none",
          }}
        />
        <button
          onClick={handleCommentSubmit}
          style={{
            backgroundColor: "#EC1D64",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Comment
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
