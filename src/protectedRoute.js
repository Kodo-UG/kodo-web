import { Redirect } from "react-router-dom";

export const ProtectedRoute = ({ element: Component }) => {
const {token} = localStorage.getItem("userData");
console.log(token)
	if (!token) {
        <Redirect to="/login"/>
	}

	return Component;
};

