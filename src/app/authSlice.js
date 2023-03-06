import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: true,
	currentUser: {}
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCurrentUser: (state, action) => {
			state.currentUser = action.payload;
			sessionStorage.setItem(JSON.stringify(action.payload));
			return state;
		}
	}
});

export const selectAuth = state => state.auth;
export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
