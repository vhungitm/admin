import { createSlice } from '@reduxjs/toolkit';
import cookies from 'js-cookie';

const initialState = {
	loading: true,
	currentUser: JSON.parse(localStorage.getItem('user'))
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCurrentUser: (state, action) => {
			// Update current user
			if (action.payload) {
				const { jwToken, ...user } = action.payload;

				state.currentUser = user;
				cookies.set('token', jwToken);
				localStorage.setItem('user', JSON.stringify(user));
			}
			// Remove current user
			else {
				state.currentUser = null;
				cookies.remove('token');
				localStorage.removeItem('user');
			}

			return state;
		}
	}
});

export const selectAuth = state => state.auth;
export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
