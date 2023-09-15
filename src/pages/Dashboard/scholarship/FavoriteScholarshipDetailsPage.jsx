import React from "react";
import MyHeader from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import FavoriteScholarshipDetails from "./FavoriteScholarshipDetails";

const FavoriteScholarshipDetailsPage = () => {
  return (
    <>
      <div style={{ background: "#f4f6f9" }} className="wrapper">
        <MyHeader />
        <Menu />
        <div
          className="w-100 "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            height: "auto",
          }}
        >
          <FavoriteScholarshipDetails />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default FavoriteScholarshipDetailsPage;
