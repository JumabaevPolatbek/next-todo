import { Todo } from '@/redux/types';
import Link from 'next/link';
import React from 'react';
type Props = {
	todo: Todo;
};
const ListTodo: React.FC<Props> = ({ todo }) => {
	return (
		<div className='py-2 px-3 bg-red-300'>
			<Link
				href={todo.title}
				className='block'
			>
				{todo.title}
			</Link>
		</div>
	);
};

export default ListTodo;
