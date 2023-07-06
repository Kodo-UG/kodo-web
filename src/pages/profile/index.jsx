import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import ProfileComponent from "./ProfileComponent";

const Profile = () => {
	const [data, setData] = useState([]);
	const [id, setId] = useState(null);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const userDataPromise = localStorage.getItem("userData");
				const userData = await userDataPromise;
				const parsedUserData = JSON.parse(userData);
				const userId = parsedUserData.user._id;
				setId(userId);
			} catch (error) {
				console.log(error);
			}
		};

		fetchUserData();
	}, []);

	const fetchUser = async (id) => {
		try {
			const response = await axiosInstance.get(`/user/profile/${id}`);

			// console.log(response.data.data, "RESPONSE IS HERE from profile ");
			setData(response.data.data);
		} catch (error) {
			// console.error("Error fetching user:", error);
			throw error;
		}
	};

	useEffect(() => {
		if (id) {
			fetchUser(id);
		}
	}, [id]);

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
