import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  RedditShareButton,
} from "react-share";

const CustomShareComponent = ({ url, title }) => {
  return (

      <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
      }}
      >
        <div
          style={{
            borderRadius: "50%",
            background: "white",
            // padding: "0.5rem",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FacebookShareButton url={url} quote={title}>
            <img
              src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1693652975/icons8-facebook-48_x1lj3l.png"
              alt="Facebook Share"
            />
          </FacebookShareButton>
        </div>
        <div
          style={{
            borderRadius: "50%",
            background: "white",
            // padding: "0.5rem",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
             <TwitterShareButton url={url} title={title}>
          <img
            src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1693653219/icons8-twitter-48_whz99n.png"
            alt="Twitter Share"
          />
        </TwitterShareButton>
        </div>
   

        <div
          style={{
            borderRadius: "50%",
            background: "white",
            // padding: "0.5rem",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
            <WhatsappShareButton url={url} title={title} separator=":: ">
          <img
            src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1693653219/icons8-whatsapp-48_p3sygf.png"
            alt="WhatsApp Share"
          />
        </WhatsappShareButton>
        </div>
        <div
          style={{
            borderRadius: "50%",
            background: "white",
            padding: "0.5rem",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
           <EmailShareButton url={url} subject={title}>
          <img
            src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1693653218/icons8-email-50_ko7p4v.png"
            alt="Email Share"
          />
        </EmailShareButton>
        </div>

        <div
          style={{
            borderRadius: "50%",
            background: "white",
            // padding: "0.5rem",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
         <LinkedinShareButton url={url} title={title}>
          <img
            src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1693653687/icons8-linkedin-48_pev0jo.png"
            alt="LinkedIn Share"
          />
        </LinkedinShareButton>
        </div>
        <div
          style={{
            borderRadius: "50%",
            background: "white",
            // padding: "0.5rem",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
         <TelegramShareButton url={url} title={title}>
          <img
            src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1693653687/icons8-telegram-48_jliedh.png"
            alt="Telegram Share"
          />
        </TelegramShareButton>
        </div>
        <div
          style={{
            borderRadius: "50%",
            background: "white",
            // padding: "0.5rem",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
            
            <RedditShareButton url={url} title={title}>
          <img
            src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1693653687/icons8-reddit-100_lww9m8.png"
            alt="Reddit Share"
          />
        </RedditShareButton>
        </div>

        {/* Add more social media icons and buttons as needed */}
      </div>

  );
};

export default CustomShareComponent;
