import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import ProfileComponent from "./ProfileComponent";

const Profile = () => {
	const [data, setData] = useState([]);
	const fetchUser = async () => {
		try {
			const response = await axiosInstance.get(
				"http://165.227.139.53/api/v1/user/profile/64a151d67a60cf3cb920892a"
			);

			console.log(response.data.data, "RESPONSE IS HERE from profile ");
			setData(response.data.data);
			// return user;
		} catch (error) {
			console.error("Error fetching user:", error);
			throw error;
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<div>
			<div
				style={{
					padding: "20px",
					justifyContent: "center",
					alignItems: "center",
					marginBottom: "200px",
				}}
				className="container"
			>
				<ProfileComponent
					key={data._id}
					name={data.fname + "  " + data.lname}
					email={data.email}
					location={data.city + "," + data.country}
					phone={data.phone}
					address={data.city + "," + data.country}
					fullname={data.fname + " " + data.lname}
				/>
			</div>
		</div>
	);
};
export default Profile;
