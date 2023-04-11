import ListTodo from '@/components/ListTodo';
import TodoAdd from '@/components/TodoAdd';
import { useAppSelector } from '@/redux/hook';
import { selectTodo } from '@/redux/reducers';
import { Todo } from '@/redux/types';
import { GetServerSideProps } from 'next';
export default function Home(props: Todo[]) {
	console.log(props);
	// console.log('fetch',fetch('api/form'))
	return (
		<>
			<TodoAdd />
		</>
	);
}

export const getServerSideProps: GetServerSideProps<{
	todos: Todo[];
}> = async () => {
	const request = await fetch('http://localhost:3000/api/form')
	const data = await request.json()
	return {
		props: {
			todos: data,
		},
	};
};
