import axios from 'axios';

export const getUserList = async (page) => {
	try {
		const { data } = await axios.get(
			`https://reqres.in/api/users?per_page=2&page=${page}`
		);
		return data;
	} catch (e) {
		window.alert(e);
	}
};
