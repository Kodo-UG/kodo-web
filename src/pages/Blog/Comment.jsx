import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";

const Comment = ({ image , username, timestamp, text }) => {
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
          src={ image || `https://ui-avatars.com/api/name=${username}&background=random`}
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
      </div>
    </div>
  );
};

export default Comment;
