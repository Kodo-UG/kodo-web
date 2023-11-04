import { useMediaQuery } from "@uidotdev/usehooks";
import CustomShareComponent from "./CustomShareComponent";

export default function RSSUsage() {
	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const isMd = useMediaQuery(
		"only screen and (min-width : 700px) and (max-width : 1250px)"
	);
	const isLg = useMediaQuery("only screen and (min-width : 1250px)");

	const userId = localStorage.getItem("userID");
	const URL = `https://kodoscholarships.com/admissions/${userId}`;
	const useURL = `https://kodoscholarships.com/admissions/${userId}`;

	return (
		<div
			className="p-5 mt-5 d-flex flex-column align-items-center justify-content-center "
			style={{
				backgroundColor: "#f0f4f8"
			}}
		>
			<div
				className={` bg-white h-100  mb-5 px-4 py-4`}
				style={{
					width: isSm ? "100%" : "30%",
					marginLeft: isLg ? "20rem" : isMd ? "18rem" : isSm ? "1rem" : "",
					boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<div className=" w-100 " style={{ height: "16rem" }}>
					<img
						className="w-100 h-100 object-cover"
						src="/images/inv.png"
						alt=""
						style={{
							height: "100%",
							width: "100%",
							objectFit: "cover"
						}}
					/>
				</div>
				<div
					className="bg-white text-center p-2"
					style={{
						borderBottom: "2px solid gray"
					}}
				>
					<h4 style={{ fontWeight: "bold" }}>
						Get A Free Month Subscription!
					</h4>
					<p>
						Invite 5 Friends to Kodo Scholarships and get yourself a free
						subscription for one month
					</p>
				</div>
				<div className="w-100  px-4">
					<div className="w-90 p-4  h-25vh d-flex align-items-center justify-content-center flex-column mb-4">
						<CustomShareComponent url={URL} />
						<div className="d-flex align-items-center justify-content-center mt-4">
							<div
								style={{ width: "130px", backgroundColor: "#011f4b" }}
								className="px-2 text-white d-flex flex-column align-items-center justify-content-center mr-1"
							>
								<h1 style={{ fontWeight: "bold" }}>05</h1>
								<p className="text-small">FRIENDS INVITED</p>
							</div>
							<div
								style={{ width: "130px", backgroundColor: "#ff9a00" }}
								className="px-2 text-white d-flex flex-column align-items-center justify-content-center"
							>
								<h1 style={{ fontWeight: "bold" }}>01</h1>
								<p className="text-small">MONTH FREE</p>
							</div>
						</div>
					</div>
				</div>
				<button className="w-100 p-1 bg-black text-white d-flex align-items-center justify-content-center">
					<a href={useURL} style={{ fontWeight: "bold", color: "white" }}>
						INVITE A FRIEND
					</a>
				</button>
				<div className="w-100 d-flex align-items-center justify-content-center p-2">
					<div>Or Copy Your Link</div>
				</div>
				<button
					className="w-100 p-1  d-flex align-items-center justify-content-center"
					style={{
						border: "2px solid black"
					}}
				>
					<input
						style={{
							width: "100%",
							justifyContent: "center",
							alignItems: "center"
						}}
						id="urlInput"
						name="url"
						type="text"
						value={useURL}
						required
					/>
				</button>
			</div>
		</div>
	);
}
