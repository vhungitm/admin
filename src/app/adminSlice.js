import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sidebar: {
		show: JSON.parse(localStorage.getItem('showSidebar')),
		menu: [
			{
				name: 'home',
				href: '/home',
				icon: 'menu-home.png',
				title: 'Home'
			}
		]
	}
};

const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		setShowSidebar(state, action) {
			state.sidebar.show = action.payload;
			localStorage.setItem('showSidebar', JSON.stringify(action.payload));
			return state;
		}
	}
});

export const selectAdmin = state => state.admin;
export const adminActions = adminSlice.actions;
export const adminReducer = adminSlice.reducer;
