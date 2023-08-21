import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Button, Modal } from "antd";
import MatchedCard from "./MatchedCard";
import ShowTitle from "./ShowTitle";
import CombinedScholarshipCard from "./CombinedScholarshipCard";
import MapCardData from "./MapCardData";
import "./modal.css";

const Scholarship = () => {
  const isSm = useMediaQuery("only screen and (max-width : 700px)");
  const [modal2Open, setModal2Open] = useState(false);

  const closeModal = () => {
    setModal2Open(false);
    localStorage.setItem("modal2Open", "false");
  };

  const openModal = () => {
    setModal2Open(true);
    localStorage.setItem("modal2Open", "true");
  };

  useEffect(() => {
    const storedModalState = localStorage.getItem("modal2Open");
    if (storedModalState === "false") {
      closeModal();
    } else {
      openModal();
    }
  }, []);

  return (
    <div>
      <div className="content-wrapper">
        <section style={{ marginBottom: "3rem" }} className="content">
          <div
            style={{
              display: "flex ",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              padding: "2px",
              justifyContent: "center",
            }}
          >
            <MatchedCard title="scholarships" total={302500} />

            <ShowTitle />
            {isSm ? <CombinedScholarshipCard /> : <MapCardData />}
            <Modal
              centered
              visible={modal2Open}
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
                src="https://res.cloudinary.com/itgenius/image/upload/v1692444047/Kodo_Pop_Up_Ad-05_tefod6.jpg"
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
                  onClick={closeModal}
                  style={{
                    background: "none",
                    border: `2px solid #ec1d64`,
                    color: "#ec1d64",
                    padding: 2,
                    width: "5rem",
                  }}
                >
                  close
                </Button>
              </div>
            </Modal>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Scholarship;
