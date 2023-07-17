import { Button } from "antd";
import { BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { FaAward, FaRegCalendarAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const LargeCardNotPaid = ({
    formatDate,
    title,
    subText,
    award,
    link,
    about,
}) => {
    const date = new Date(formatDate);
    const formattedDate = date.toLocaleDateString();
    const history = useHistory();

    return (
        <>
            <div
                style={{
                    backgroundColor: "#fff",
                    height: "12rem",
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
                        height: "90%",
                        width: "70%",
                        borderRadius: "5px 0px  0px",
                    }}
                >
                    <div
                        style={{
                            paddingTop: ".4rem",
                            marginLeft: "1rem",
                            marginBottom: "2rem",
                            backgroundColor: "#125875",
                            marginRight: "1rem",
                            borderRadius: "5px",
                            justifyContent: "space-between",
                            alignItems: "center",
                            display: "flex",
                        }}
                    >
                        <div className="w-25">
                            <img
                                src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688646453/Screenshot_from_2023-07-06_14-10-36-removebg-preview_1_dxweaz.png"
                                alt=""
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                        </div>

                        <div
                            className=""
                            style={{
                                marginRight: "3rem",
                            }}
                        >
                            <p style={{ fontWeight: "bold", color: "gray" }}>
                                Upgrade Account Required
                                {/* <br />
								<span
									style={{
										fontWeight: "normal",
										color: "#ec1d64",
										opacity: 0.9,
										display: "flex",
										justifyContent: "center",
										alignItems: "center"
									}}
								>
									Access all matched scholarships{" "}
									<IoIosArrowForward
										style={{ color: "#ec1d64", opacity: 0.9 }}
									/>
								</span> */}
                            </p>
                        </div>
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
                            marginBottom: "6rem",
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
                        {}
                        <Button
                            onClick={() => history.push("/payment")}
                            style={{
                                backgroundColor: "#f89936",
                                width: "80%",
                            }}
                            type="primary"
                            block
                        >
                            Upgrade Account
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LargeCardNotPaid;
