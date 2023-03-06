import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: true,
	currentUser: JSON.parse(localStorage.getItem('user'))
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCurrentUser: (state, action) => {
			state.currentUser = action.payload;
			localStorage.setItem('user', JSON.stringify(action.payload));
			return state;
		}
	}
});

export const selectAuth = state => state.auth;
export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
