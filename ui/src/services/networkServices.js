import axios from "axios";

export const shortenUrl = async (longUrl, shortEndPoint) => {
	const url = `http://localhost:4445/shorten.ky`;
	const body = { longUrl, shortEndPoint };
	console.log("Shorten API fired");
	try {
		const rawResponse = await axios.post(url, body, {
			headers: { "Content-Type": "application/json" },
		});
		const response = await rawResponse.data;
		return await response;
	} catch (exception) {
		console.warn(`Exception in shortening URL ${exception}`);
	}
};

export const signup = async (username, password) => {
	const url = `http://localhost:4445/signup.ky`;
	const body = { username, password };
	console.log("Signup API fired");
	try {
		const rawResponse = await axios.post(url, body, {
			headers: { "Content-Type": "application/json" },
		});
		const response = await rawResponse.data;
		return await response;
	} catch (exception) {
		console.warn(`Exception in signup API ${exception}`);
	}
};
