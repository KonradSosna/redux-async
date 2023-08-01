import { useEffect, useState } from 'react';
import { getUserList } from './utils/actions';

const App = () => {
	const [page, setPage] = useState(1);
	const [users, setUsers] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getUserList(page).then((res) => {
			setUsers(res);
			setLoading(false);
		});
	}, [page]);

	const Increment = () => {
		setPage((prevState) => ++prevState);
	};

	const Decrement = () => {
		setPage((prevState) => --prevState);
	};

	return (
		<div>
			<button onClick={() => Decrement()}>Previous</button>
			<button onClick={() => Increment()}>Next</button>
			<div style={{ margin: '10px' }}>Page: {JSON.stringify(users.page)}</div>
			<div style={{ margin: '10px' }}>Loading: {JSON.stringify(loading)}</div>
			<div style={{ margin: '10px' }}>
				{Object.values(users)[4]?.map((user) => (
					<div key={user.id}>{user.first_name}</div>
				))}
			</div>
		</div>
	);
};

export default App;
