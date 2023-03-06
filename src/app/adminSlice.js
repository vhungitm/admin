import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	theme: {
		color: 'primary'
	},
	language: 'vn'
};

const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {}
});

export const selectAdmin = state => state.admin;
export const adminActions = adminSlice.actions;
export const adminReducer = adminSlice.reducer;
