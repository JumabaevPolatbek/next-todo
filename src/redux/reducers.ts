import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from './hook';
import { IState, Todo } from './types';

const initialState: IState = {
	id: 1,
	todos: [
		{
			id: 1,
			title: 'Javascript',
			description: 'React TS',
		},
	],
};

export const todoReducer = createSlice({
	name: 'Todo',
	initialState,
	reducers: {
		addTodo: (
			state,
			action: PayloadAction<Omit<Todo, 'id'>>
		) => {
			state.id += 1;
			state.todos.push({
				id: state.id,
				title: action.payload.title,
				description: action.payload.description,
			});
		},
		removeTodo: (
			state,
			action: PayloadAction<number>
		) => {
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload
			);
		},
	},
	// extraReducers: {
	// 	[HYDRATE]: (state, action) => {
	// 		console.log('HYDRATE', state, action.payload);
	// 		return {
	// 			...state,
	// 			...action.payload.subject,
	// 		};
	// 	},
	// },
});

export const { addTodo, removeTodo } = todoReducer.actions;
export const selectTodo = (state: RootState) =>
	state.Todo.todos;
