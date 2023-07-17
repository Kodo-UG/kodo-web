import { Button, Modal } from "antd";
import React from "react";
import { useState } from "react";
import { BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { FaAward, FaRegCalendarAlt } from "react-icons/fa";

const LargeCard = ({ formatDate, title, subText, award, link, about }) => {
    const date = new Date(formatDate);
    const formattedDate = date.toLocaleDateString();

    const [visible, setVisible] = useState(false);

    const hanleModal = () => {
        setVisible(!visible);
    };

    return (
        <>
            <div
                style={{
                    backgroundColor: "#fff",
                    height: "11rem",
                    borderRadius: "5px",
                    marginTop: "1rem",
                    display: "flex",
                    flexDirection: "row",
                    boxShadow: "0 5px 10px rgba(0,0,0,0.10)",
                    cursor: "pointer",
                    padding: "4px",
                    width: "65%",
                    marginLeft: "12rem",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* left div */}
                <div
                    style={{
                        height: "100%",
                        width: "70%",
                        borderRadius: "5px 0px  0px",
                    }}
                >
                    <div
                        style={{
                            paddingTop: ".4rem",
                            marginLeft: "1rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "17px",
                                color: "#125875",
                                lineHeight: "26px",
                                fontWeight: "bold",
                            }}
                        >
                            {title}
                        </h2>
                        <p style={{ fontSize: "12px", color: "#4e4b66" }}>
                            {subText}
                        </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            // backgroundColor: "yellow",
                            height: "5rem",
                        }}
                    >
                        {/* left child div */}
                        <div
                            style={{
                                display: "flex",
                                padding: ".1rem",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                            }}
                        >
                            <div
                                style={{
                                    paddingLeft: ".1rem",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <FaAward
                                    style={{
                                        width: "1.7rem",
                                        height: "1.7rem",
                                        color: "#4e4b66",
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    // padding: ".1rem",
                                    justifyContent: "center",
                                    height: "100%",
                                    alignItems: "center",
                                    marginTop: "1.52rem",
                                    marginLeft: ".8rem",
                                }}
                            >
                                {" "}
                                <p
                                    style={{
                                        marginBottom: "-1px",
                                        marginLeft: ".1rem",
                                        color: "#4e4b66",
                                        fontSize: "14px",
                                        lineHeight: "22px",
                                        fontWeight: "400px",
                                    }}
                                >
                                    Award
                                </p>
                                <p
                                    style={{
                                        marginTop: "0px",
                                        fontWeight: "bold",
                                        color: "#125875",
                                        fontSize: "18px",
                                        lineHeight: "20px",
                                    }}
                                >
                                    {award}
                                </p>
                            </div>
                        </div>
                        {/* middle child */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingLeft: "1rem",
                                paddingRight: "1rem",
                                // backgroundColor: "yellow",
                                height: "5rem",
                            }}
                        >
                            <div
                                style={{
                                    paddingLeft: ".1rem",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <FaRegCalendarAlt
                                    style={{
                                        width: "1.7rem",
                                        height: "1.7rem",
                                        color: "#4e4b66",
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    // padding: ".1rem",
                                    justifyContent: "center",
                                    height: "100%",
                                    alignItems: "center",
                                    marginTop: "1.52rem",
                                    marginLeft: ".8rem",
                                }}
                            >
                                {" "}
                                <p
                                    style={{
                                        marginBottom: "-1px",
                                        marginLeft: ".1rem",
                                        color: "#4e4b66",
                                        fontSize: "14px",
                                        lineHeight: "22px",
                                        fontWeight: "400px",
                                    }}
                                >
                                    Deadline
                                </p>
                                <p
                                    style={{
                                        marginTop: "0px",
                                        fontWeight: "bold",
                                        color: "#125875",
                                        fontSize: "18px",
                                        lineHeight: "20px",
                                    }}
                                >
                                    {formattedDate}
                                </p>
                            </div>
                        </div>
                        {/* right child */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingLeft: "1rem",
                                paddingRight: "1rem",
                                // backgroundColor: "yellow",
                                height: "5rem",
                            }}
                        >
                            <div
                                style={{
                                    // padding: ".1rem",
                                    justifyContent: "center",
                                    height: "100%",
                                    alignItems: "center",
                                    marginTop: "1.52rem",
                                    marginLeft: ".8rem",
                                }}
                            >
                                {" "}
                                <p
                                    style={{
                                        marginBottom: "-1px",
                                        marginLeft: ".1rem",
                                        color: "#4e4b66",
                                        fontSize: "14px",
                                        lineHeight: "22px",
                                        fontWeight: "400px",
                                    }}
                                >
                                    Effort
                                </p>
                                <div
                                    style={{
                                        marginTop: "0px",
                                        fontWeight: "bold",
                                        color: "#125875",
                                        fontSize: "18px",
                                        lineHeight: "20px",
                                    }}
                                >
                                    <img
                                        src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688650069/Screenshot_from_2023-07-06_14-10-36-removebg-preview__2_-removebg-preview_du6wl6.png"
                                        style={{
                                            width: "3rem",
                                            height: "3rem",
                                            color: "#4e4b66",
                                        }}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right div */}
                <div
                    style={{
                        width: "1px",
                        backgroundColor: "rgba(128, 128, 128, 0.3)",
                        margin: "2rem 0",
                        height: "8rem",
                        alignContent: "center",
                    }}
                ></div>
                <div
                    style={{
                        height: "100%",
                        width: "30%",
                        borderRadius: "5px",
                        // justifyItems:"stretch"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            // padding: ".3rem",
                            justifyContent: "flex-end",
                            marginBottom: "5rem",
                            marginTop: "1rem",
                            marginRight: "2rem",
                            color: "#4e4b66",
                        }}
                    >
                        <BsBookmark
                            style={{
                                height: "20px",
                                width: "20px",
                                fontWeight: "bolder",
                            }}
                        />
                        <BsThreeDotsVertical
                            style={{
                                height: "20px",
                                width: "20px",
                                fontWeight: "bolder",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "1rem",
                            justifyContent: "center",
                        }}
                    >
                        {" "}
                        <Button
                            onClick={() => setVisible(!visible)}
                            style={{ backgroundColor: "#125875", width: "80%" }}
                            type="primary"
                            block
                        >
                            Apply
                        </Button>
                    </div>

                    <Modal
                        open={visible}
                        footer={null}
                        onCancel={hanleModal}
                        maskClosable={false}
                        bodyStyle={{
                            borderRadius: "2rem",
                            padding: "1rem",
                            opacity: 0.8,
                        }}
                        style={{
                            backdropFilter: "blur(10px)",
                            zIndex: 999999,
                            width: "100%",
                        }}
                    >
                        <div
                            style={{
                                height: "6rem",
                                background: "#125875",
                                color: "white",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <h5 style={{ margin: 0 }}>
                                {title} Scholarship Details
                            </h5>
                        </div>
                        <div style={{ padding: "1rem" }}>
                            <div
                                className="card-body"
                                style={{ height: "6rem" }}
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex flex-column align-items-center">
                                        <p className="mb-1">Award</p>
                                        <p
                                            style={{
                                                color: "#125875",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {award}
                                        </p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <p className="mb-1">Deadline</p>
                                        <p
                                            style={{
                                                color: "#125875",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {formattedDate}
                                        </p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <p className="mb-1">Effort</p>
                                        <img
                                            src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688650069/Screenshot_from_2023-07-06_14-10-36-removebg-preview__2_-removebg-preview_du6wl6.png"
                                            alt="svg"
                                            style={{
                                                objectFit: "cover",
                                                maxWidth: "70%",
                                                maxHeight: "70%",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 style={{ fontWeight: "bold" }}>About</h4>
                                <p
                                    style={{
                                        color: "gray",
                                        textAlign: "justify",
                                    }}
                                >
                                    {about}
                                </p>
                            </div>
                        </div>
                        <div
                            style={{
                                textAlign: "center",
                                marginTop: "1rem",
                                width: "100%",
                                height: "6rem",
                                color: "white",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <a
                                href={`${link}`}
                                style={{
                                    backgroundColor: "#ec1d64",
                                    border: "none",
                                    color: "white",
                                    padding: "1rem",
                                    width: "100%",
                                    borderRadius: "5px",
                                }}
                            >
                                Apply
                            </a>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    );
};

export default LargeCard;
