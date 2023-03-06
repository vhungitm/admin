import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { adminReducer } from './adminSlice';
import { authReducer } from './authSlice';

const rootReducer = {
  auth: authReducer,
  admin: adminReducer
};

const store = configureStore({
  reducer: rootReducer
});

export const useAppDispatch = store.dispatch;
export const useAppSelector = useSelector;
export default store;
