import axios from "axios";

const token = localStorage.getItem("token");

// const baseURL = "https://kodo-backend.kodoscholarship.com/api/v1";
const baseURL = "http://13.61.142.190:4000/api/v1"

const axiosInstance = axios.create({
	baseURL,
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${token}`,
	},
});

export default axiosInstance;
