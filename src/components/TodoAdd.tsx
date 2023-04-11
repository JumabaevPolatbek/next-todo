// 'use client';
import { useAppDispatch } from '@/redux/hook';
import { addTodo } from '@/redux/reducers';
import { makeStore } from '@/redux/store';
import { Todo } from '@/redux/types';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const TodoAdd = () => {
	const dispatch = useAppDispatch();
	const { register, handleSubmit, reset } =
		useForm<Todo>();
	const formSubmit: SubmitHandler<
		Omit<Todo, 'id'>
	> = async (data) =>
		await fetch('api/form', {
			headers: {
				'Content-type': 'application/JSON',
			},
			method: 'POST',
			body: JSON.stringify(data),
		}).then((res) => {
			if (res.status === 200) {
				reset();
				dispatch(addTodo(data));
			}
		});
	return (
		<div className='flex justify-center items-center'>
			<form
				className='flex justify-between items-start py-[15px] px-[15px]'
				onSubmit={handleSubmit(formSubmit)}
			>
				<div className='flex flex-col items-center'>
					<div className='px-[15px]'>
						<input
							type='text'
							{...register('title')}
							className='py-2 px-3 border rounded '
						/>
					</div>
					<div className='py-[10px] px-[15px]'>
						<input
							type='text'
							className='py-2 px-3 border rounded '
							{...register('description')}
						/>
					</div>
				</div>
				<button
					type='submit'
					className='py-2 px-3 bg-gray-600 rounded border'
				>
					Add
				</button>
			</form>
		</div>
	);
};

export default TodoAdd;
