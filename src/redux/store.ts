import {
	configureStore,
	ThunkAction,
} from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { todoReducer } from './reducers';
import { RootStore } from './hook';

export const makeStore = () =>
	configureStore({
		reducer: {
			[todoReducer.name]: todoReducer.reducer,
		},
	});

export  const wrapper = createWrapper<RootStore>(makeStore);
