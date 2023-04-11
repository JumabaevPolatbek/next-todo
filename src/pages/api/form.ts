import { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from '@/redux/types';
export default function route(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const body: Todo = req.body;
	res.status(200).json(body);
}
