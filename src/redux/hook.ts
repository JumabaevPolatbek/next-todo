import { Action, ThunkAction } from '@reduxjs/toolkit';
import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from 'react-redux';
import { makeStore } from './store';

export type RootStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<RootStore['getState']>;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action
>;

export type AppDispatch = RootStore['dispatch'];

export const useAppDispatch = () =>
	useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =
	useSelector;
