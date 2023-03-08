import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sidebar: {
		show: JSON.parse(localStorage.getItem('showSidebar')),
		menu: [
			{
				id: 0,
				href: '/home',
				icon: 'menu-home.png',
				title: 'Home'
			},
			{
				id: 1,
				href: '/technologies',
				icon: 'menu-news.png',
				title: 'Technologies',
				subTitle: 'Technologies',
				items: [
					{
						id: 0,
						href: '/technologies/iot',
						title: 'IoT'
					},
					{
						id: 1,
						href: '/technologies/5g',
						title: '5G'
					}
				]
			},
			{
				id: 2,
				href: '/news',
				icon: 'menu-news.png',
				title: 'News',
				subTitle: 'News',
				items: [
					{
						id: 0,
						title: 'Sub'
					},
					{
						id: 1,
						title: 'Sub 2'
					}
				]
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
