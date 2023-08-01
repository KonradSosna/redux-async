import { configureStore, createSlice } from '@reduxjs/toolkit';
import { getUserList } from '../utils/actions';

const initialState = {
	data: [],
	loading: false,
	errorMessage: '',
};

export const userSlice = createSlice({
	name: 'users',
	initialState,
	extraReducers: {
		[getUserList.pending]: (state) => {
			state.loading = true;
		},
		[getUserList.fulfilled]: (state, action) => {
			state.loading = false;
			state.data = action.payload;
		},
		[getUserList.rejected]: (state, action) => {
			state.loading = false;
			state.errorMessage = action.payload;
		},
	},
});

export const store = configureStore({
	reducer: {
		users: userSlice.reducer,
	},
});
