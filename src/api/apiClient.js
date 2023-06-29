import axios from "axios";

 const apiClient = axios.create({
	baseURL: "http://165.227.139.53/api/v1",
});


apiClient.defaults.headers.post["Content-Type"] = "application/json";
apiClient.interceptors.request.use(
	( config ) => {
		// const token = state.accessToken;
		// const auth = token ? `Bearer ${token}` : '';
		// config.headers.common['Authorization'] = auth;
		return config;
	},
	( error ) => Promise.reject( error )
);


export default apiClient