import { configureStore, createSlice } from '@reduxjs/toolkit';
import { getUserList } from '../utils/actions';

const initialState = {
	data: [],
	isLoading: false,
	isSuccess: false,
	errorMessage: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: {
		[getUserList.pending]: (state) => {
			state.isLoading = true;
		},
		[getUserList.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.isSuccess = true;
			state.data = payload;
		},
		[getUserList.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.errorMessage = payload;
		},
	},
});

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
	},
});
