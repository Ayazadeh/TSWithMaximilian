import React, { useState } from "react";
import { Todo } from "./todo.model"

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([])

	const todoAddHandler = (text: string) => {
		setTodos([{ id: Math.random().toString(), text: text }]);
	}

	return (
		<div className="App">
			<NewTodo onAddTodo={todoAddHandler} />
			<TodoList items={todos} />
		</div>
	);
};

export default App;
