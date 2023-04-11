import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { Todo } from '@/redux/types';
const todoList: Todo[] = [];
export default async function route(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const body: Todo = req.body;
	todoList.push(body);
	console.log('Api Todo', todoList);
	res.status(200).json(body);
	NextResponse.json(todoList)
}
 