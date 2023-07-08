import React from "react";
import { BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import CollapsibleInput from "./CollapsibleInput";

function CardScholarshipSubscribed({
	cardTitle,
	text,
	award,
	deadline,
	subscription,
}) {
	console.log(subscription);
	const date = new Date(deadline);
	const formattedDate = date.toLocaleDateString();
	return (
		<div
			className=" shadow-xl"
			data-toggle="modal"
      data-target="#exampleModalLong"
			style={{
				width: "24rem",
				display: "flex",
				flexDirection: "column",
				height: "12rem",
				justifyContent: "space-between",
				background: "white",
				borderRadius: "0.5rem",
				boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
			}}
		>
			<div
				style={{
					width: "100%",
					color: "#125875",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",

					borderTopLeftRadius: "0.5rem",
					borderTopRightRadius: "0.5rem",
				}}
			>
				<div
					style={{
						width: "75%",
						padding: "0.5rem",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<h4
						className="text-lg"
						style={{
							marginLeft: "0.5rem",
							opacity: 0.8,
							fontWeight: "bold",
						}}
					>
						{" "}
						{cardTitle}
					</h4>
				</div>
				<div
					style={{
						width: "25%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-evenly",
						fontWeight: "bold",
						opacity: 0.5,
					}}
				>
					<BsBookmark style={{ height: "25px", width: "25px" }} />
					<BsThreeDotsVertical style={{ height: "25px", width: "25px" }} />
				</div>
			</div>

			<div className="card-body" style={{ height: "6rem" }}>
				<div className="d-flex justify-content-between align-items-center">
					<div className="d-flex flex-column align-items-center">
						<p className="mb-1">Award</p>
						<p style={{ color: "#125875" }}>$ {award}</p>
					</div>
					<div className="d-flex flex-column align-items-center">
						<p className="mb-1">Deadline</p>
						<p style={{ color: "#125875" }}>{formattedDate}</p>
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
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "end",
					width: "100%",
					paddingRight: "1rem",
					color: "gray",
				}}
			>
				<p>
					<AiOutlineEye
						style={{
							marginRight: "0.5rem",
							width: "25px",
							height: "25px",
						}}
					/>
					viewed
				</p>
			</div>
			




			<div
        class="modal fade shadow-xl"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
        style={{
  
              backdropFilter: "blur(10px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content"  style={{
                  borderRadius: "2rem",
                  padding: "1rem",
          opacity: 0.8,
        }}>
            <div class="modal-header" style={{height: "6rem", background: "#125875", color: "white", fontWeight: "bold", display: "flex", alignItems: "center", }}>
              <h5 class="modal-title" id="exampleModalLongTitle">
                Scholarship Details
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="card-body" style={{ height: "6rem" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-center">
                    <p className="mb-1">Award</p>
                    <p style={{ color: "#125875" }}>$ {award}</p>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <p className="mb-1">Deadline</p>
                    <p style={{ color: "#125875" }}>{formattedDate}</p>
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
                <h4 style={{fontWeight: "bold"}}>About</h4>
                <p style={{color: "gray"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum porro illum quasi expedita asperiores molestias et omnis sed. Iure non illum provident, maiores distinctio inventore harum quae adipisci aliquam voluptatibus!</p>
              </div>

                <div><h4 style={{fontWeight: "bold"}}>Status</h4></div>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}>
              
                <div>
                  <CollapsibleInput />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary btn-lg btn-block" style={{background: "#FF7350", border: "none",}}>
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
		</div>
	);
}

export default CardScholarshipSubscribed;
