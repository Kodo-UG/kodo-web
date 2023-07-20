import axios from "axios";

const token = localStorage.getItem("token");

const baseURL = "https://demo.kodoscholarships.com/api/v1";

const axiosInstance = axios.create({
	baseURL,
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${token}`
	}
});

export default axiosInstance;
