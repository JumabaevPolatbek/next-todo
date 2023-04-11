export type Todo = {
	id: number;
	title: string;
	description: string;
};
export interface IState {
	id: number;
	todos: Todo[];
}
