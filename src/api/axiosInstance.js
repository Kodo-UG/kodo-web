import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://165.227.139.53/api/v1",
	headers: {
		Accept: `application/json`,
	},
});
