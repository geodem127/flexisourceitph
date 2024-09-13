import { useState } from "react";
import axios from "axios";


const axiosCommonConfig = axios.create({
	baseURL: "https://localhost:3000",
	withCredentials: false,

});

const useAxios = () => {
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState();

	const sendRequest = async (method = "GET", url = "", options = {}) => {
		setLoading(true);
		setResponse(undefined);
		let funcRes = null;
		try {
			const res = await axiosCommonConfig({ method, url, ...options })
			if (res.status === 200) {
				const successRes = {
					status: "success",
					description: "success",
					data: res?.data?.data,
				};
				setResponse(successRes);
				funcRes = successRes;
			} else {
				const errorRes = {
					status: "error",
					description: res?.data?.data?.error,
					data: res?.data,
				};
				setResponse(errorRes);
				funcRes = errorRes;
			}
		} catch (err) {

			const catchRes = {
				status: "error",
				description: err?.response?.data?.data?.error ? err?.response?.data?.data?.error : err.message,
				data: null,
			};
			setResponse(catchRes);
			funcRes = catchRes;
		}

		setLoading(false);
		return funcRes;
	};
	return { loading, response, sendRequest: sendRequest };
};
export default useAxios;
