import axios from "axios";

const data = localStorage.getItem("userData");
// const tokenData = JSON.parse(data?.token);

// console.log(tokenData, "TOKEN DATA  IS HERE ");

const baseURL = "http://165.227.139.53/api/v1";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbm8xOTIwMkBnbWFpbC5jb20iLCJ1c2VySWQiOiI2NDk2YzE4ZDc3ZGYzMTBkMWU3OWRmNWEiLCJpYXQiOjE2ODc2MDE1OTR9.W_HZn7Z8diK-D3Qjfyg_C8JTcnC2QRjALVh3Dr7Aick";

const axiosInstance = axios.create({
	baseURL,
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${token}`,
	},
});

export default axiosInstance;

