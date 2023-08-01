import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserList } from './utils/actions';

const App = () => {
	const users = useSelector((state) => state.users.data);
	const loading = useSelector((state) => state.users.loading);

	const dispatch = useDispatch();

	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(getUserList(page));
	}, [page, dispatch]);

	if (!users?.data) {
		return <div>Error</div>;
	}

	return (
		<div>
			<button onClick={() => setPage((prevPage) => prevPage - 1)}>
				Previous
			</button>
			<button onClick={() => setPage((prevPage) => prevPage + 1)}>Next</button>
			<div style={{ margin: '10px' }}>Page: {page}</div>
			<div style={{ margin: '10px' }}>Loading: {JSON.stringify(loading)}</div>
			<div style={{ margin: '10px' }}>
				{users?.data && users.data?.map((user) => <div>{user.first_name}</div>)}
			</div>
		</div>
	);
};

export default App;
