import { useMediaQuery } from "@uidotdev/usehooks";
import { FaReply } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import React, { useState } from "react";

const Comment = ({ image, username, timestamp, text }) => {
  
  const [replyText, setReplyText] = useState("");
  const [reply, setReply] = useState(false);

  const isSm = useMediaQuery("only screen and (max-width : 700px)");

  const isMd = useMediaQuery(
    "only screen and (min-width : 700px) and (max-width : 1250px)"
  );

  const isLg = useMediaQuery(
    "only screen and (min-width : 1250px) and (max-width : 1300px)"
  );

  const commentStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    padding: "10px",
    marginBottom: "20px",
    backgroundColor: "#fff",
    borderRadius: "5px",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  };

  const usernameStyle = {
    fontWeight: "bold",
  };

  const spanStyle = {
    color: "#666",
  };

  const bodyStyle = {
    fontSize: "16px",
    width: "100%",
  };

  const userImageStyle = {
    width: "50px",
    height: "50px",
    marginRight: "10px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const handleCommentReply = (e) => {
    e.preventDefault();
  };

  const toggleReply = (e) => {
    e.preventDefault();
    setReply(!reply);
  };

  return (
    <div style={commentStyle}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={
            image ||
            `https://ui-avatars.com/api/name=${username}&background=random`
          }
          alt="User"
          style={userImageStyle}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={headerStyle}>
          <strong style={usernameStyle}>{username}</strong>
          <span style={spanStyle}> {timestamp}</span>
        </div>
        <div
          style={{
            width: isSm
              ? "15rem"
              : "" || isMd
              ? "40rem"
              : "" || isLg
              ? "52rem"
              : "52rem",
          }}
        >
          <p style={bodyStyle}>{text}</p>
        </div>

        <div>
          <button
            onClick={toggleReply}
            style={{
              backgroundColor: "#D3D3D3",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              paddingRight: ".5rem",
              paddingLeft: ".5rem",
              paddingTop: ".1rem",
              marginRight: ".5rem",
              paddingBottom: ".1rem",
              borderRadius: 10,
            }}
            className="mr-6"
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ marginRight: ".5rem" }}>
                <FaReply />
              </span>
              <span style={{ marginRight: ".5rem" }}>reply</span>
            </span>
          </button>

          <button
            style={{
              backgroundColor: "#D3D3D3",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              paddingTop: ".1rem",
              paddingBottom: ".1rem",
              borderRadius: 10,
            }}
            className="mr-6"
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ marginRight: ".5rem" }}>
                <BiLike />
              </span>
              <span style={{ marginRight: ".5rem" }}>2</span>
              <span>
                {" "}
                <BiDislike />
              </span>
            </span>
          </button>
        </div>

        {reply && (
          <div style={{ flex: 1 }}>
            <textarea
              placeholder="Your Reply"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              style={{
                width: "100%",
                height: "5rem",
                padding: "10px",
                marginBottom: ".5rem",
                marginTop: ".5rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
                resize: "none",
              }}
            />
            <button
              onClick={toggleReply}
              style={{
                backgroundColor: "#EC1D64",
                color: "#fff",
                border: "none",
                marginRight: ".8rem",
                borderRadius: "20px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              reply
            </button>

            <button
              onClick={toggleReply}
              style={{
                backgroundColor: "#EC1D64",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
