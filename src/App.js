import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserList } from './utils/actions';

const App = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(getUserList(page));
	}, [page]);

	return (
		<div>
			<button onClick={() => setPage((prevPage) => prevPage - 1)}>
				Previous
			</button>
			<button onClick={() => setPage((prevPage) => prevPage + 1)}>Next</button>
			<div>
				<strong>Is Loading: </strong>
				{JSON.stringify(user.isLoading)}
			</div>
			<div>
				<strong>Is Success: </strong>
				{JSON.stringify(user.isSuccess)}
			</div>
			<div>
				<strong>Data: </strong>
				{JSON.stringify(user.data)}
			</div>
			<div>
				<strong>Error Message: </strong>
				{user.errorMessage}
			</div>
		</div>
	);
};

export default App;
