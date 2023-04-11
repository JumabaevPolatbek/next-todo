import ListTodo from '@/components/ListTodo';
import TodoAdd from '@/components/TodoAdd';
import { useAppSelector } from '@/redux/hook';
import { selectTodo } from '@/redux/reducers';
import { wrapper } from '@/redux/store';
import { Todo } from '@/redux/types';
import { GetServerSideProps } from 'next';

export default function Home() {
	const todos = useAppSelector(selectTodo);
	console.log(todos);
	return (
		<>
			<TodoAdd />
			{todos.map((todo) => (
				<ListTodo
					key={todo.id}
					todo={todo}
				/>
			))}
		</>
	);
}
