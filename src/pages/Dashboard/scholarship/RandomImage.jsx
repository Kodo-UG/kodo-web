import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { useHistory } from "react-router-dom";

import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    RedditShareButton,
} from "react-share";

const RandomImageModal = ({ visible, closeModal, images, show }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const history = useHistory();

    const userId = localStorage.getItem("userID");
    const URL = `https://kodoscholarships.com/admissions/${userId}`;

    useEffect(() => {
        const interval = setInterval(showRandomImage, 50000); // Change image every 5 seconds

        return () => {
            clearInterval(interval);
        };
    }, [currentImageIndex]); // Only re-run the effect if currentImageIndex changes

    const getRandomIndex = () => {
        return Math.floor(Math.random() * images.length);
    };

    const showRandomImage = () => {
        const newIndex = getRandomIndex();
        setCurrentImageIndex(newIndex);
    };

    const handleClick = () => {
        if (window.location.pathname === "/") {
            history.push("/stepper");
        }
        //  else {
        //   show();
        // }
        if (window.location.pathname === "/scholars") {
            setOpen(!open);
        }
    };

    // const handleWindowClick = (e) => {
    //   if (e.target && e.target.tagName === "A") {
    //     closeModal();
    //   }
    // };

    // useEffect(() => {
    //   window.addEventListener("click", handleWindowClick);
    //   return () => {
    //     window.removeEventListener("click", handleWindowClick);
    //   };
    // }, []);

    const items = [
        {
            key: "1",
            label: "Facebook",
            children: (
                <FacebookShareButton url={URL}>
                    <img
                        src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1693652975/icons8-facebook-48_x1lj3l.png"
                        alt="Facebook Share"
                    />
                </FacebookShareButton>
            ),
        },
        {
            key: "2",
            label: "Twitter",
            children: (
                <TwitterShareButton url={URL}>
                    <img
                        src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1693653219/icons8-twitter-48_whz99n.png"
                        alt="Twitter Share"
                    />
                </TwitterShareButton>
            ),
        },
        {
            key: "3",
            label: "WhatsApp",
            children: (
                <WhatsappShareButton url={URL}>
                    <img
                        src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1693653219/icons8-whatsapp-48_p3sygf.png"
                        alt="WhatsApp Share"
                    />
                </WhatsappShareButton>
            ),
        },
        {
            key: "4",
            label: "Email",
            children: (
                <EmailShareButton url={URL}>
                    <img
                        src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1693653218/icons8-email-50_ko7p4v.png"
                        alt="Email Share"
                    />
                </EmailShareButton>
            ),
        },
        {
            key: "5",
            label: "Linkedin",
            children: (
                <LinkedinShareButton url={URL}>
                    <img
                        src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1693653687/icons8-linkedin-48_pev0jo.png"
                        alt="LinkedIn Share"
                    />
                </LinkedinShareButton>
            ),
        },
        {
            key: "6",
            label: "Linkedin",
            children: (
                <TelegramShareButton url={URL}>
                    <img
                        src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1693653687/icons8-telegram-48_jliedh.png"
                        alt="Telegram Share"
                    />
                </TelegramShareButton>
            ),
        },
        {
            key: "7",
            label: "Linkedin",
            children: (
                <RedditShareButton url={URL}>
                    <img
                        src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1693653687/icons8-reddit-100_lww9m8.png"
                        alt="Reddit Share"
                    />
                </RedditShareButton>
            ),
        },
    ];

    return (
        <Modal
            centered
            visible={visible}
            onCancel={closeModal}
            cancelText="close"
            okText=""
            wrapClassName="modalStyle"
            style={{ padding: 0 }}
            bodyStyle={{ padding: 0 }}
            keyboard
            zIndex={1000}
            footer={null}
        >
            <img
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 10,
                    padding: 2,
                }}
                src={images[currentImageIndex]}
                alt=""
            />
            <div
                style={{
                    alignItems: "center",
                    justifyContent: "right",
                    display: "flex",
                    padding: 4,
                }}
            >
                <Button
                    type="primary"
                    onClick={handleClick}
                    style={{
                        background: "none",
                        border: `2px solid #EB1E5E`,
                        color: "#EB1E5E",
                        padding: 2,
                        width: "8rem",
                    }}
                >
                    {window.location.pathname === "/" && "Register Now"}
                    {window.location.pathname === "/scholars" &&
                        "Invite Friend"}
                </Button>
                <Button
                    type="primary"
                    onClick={closeModal}
                    style={{
                        background: "none",
                        border: `2px solid #EB1E5E`,
                        color: "#EB1E5E",
                        padding: 2,
                        width: "5rem",
                        marginLeft: "1rem",
                    }}
                >
                    Close
                </Button>
            </div>

            {open && (
                <div
                    style={{
                        borderRadius: "50%",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        padding: "10px 0px 10px 0px",
                    }}
                >
                    {items.map((item) => (
                        <button
                            onClick={() => closeModal()}
                            style={{ height: "40px", width: "40px" }}
                            key={item.key}
                        >
                            {item.children}
                        </button>
                    ))}
                </div>
            )}
        </Modal>
    );
};

export default RandomImageModal;
