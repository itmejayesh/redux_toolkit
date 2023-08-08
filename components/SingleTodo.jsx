import {removeTodo, todoCompleted} from "@/Redux/todo_slice/todoSlice";
import moment from "moment/moment";
import React from "react";
import {
	AiTwotoneDelete,
	AiFillEdit,
	AiOutlineCheckCircle,
} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";

function SingleTodo({setEditTodo}) {
	// const sortList = todoList.sort((a, b) => new Date(b.time) - new Date(a.time));

	const todo = useSelector((state) => state.todo.todoList);

	const dispatch = useDispatch(null);

	const updateTodoRedux = (todo) => {
		setEditTodo(todo);
	};

	//*delete functionality
	// const deleteTodoList = (id) => {
	// 	setTodoList(todoList.filter((todo) => todo.id !== id));
	// };
	//*complete task functionality
	// const completeTodoList = (id) => {
	// 	setTodoList(
	// 		todoList.map((todo) => {
	// 			if (todo.id === id) {
	// 				return {
	// 					...todo,
	// 					completed: !todo.completed,
	// 				};
	// 			}
	// 			return todo;
	// 		})
	// 	);
	// };
	//*edit task functionality
	// const editTodoList = (id) => {
	// 	const newTodo = todoList.find((todo) => todo.id === id);
	// 	setEditTodo(newTodo);
	// };
	return (
		<div>
			{todo.map((todo, i) => (
				<div key={i} className="bg-gray-600 p-2 rounded-md w-full h-full mt-3">
					<span className="text-xs text-slate-400">
						{moment(todo.time).fromNow()}
					</span>
					<div className="flex flex-col justify-between h-[80%]">
						<h1
							className={`pt-3 text-sm overflow-hidden ${
								todo.completed ? "line-through text-slate-200" : ""
							} `}
						>
							{todo.text.substring(0, 80)}
							{todo.text.length > 80 ? <button>...more</button> : ""}
						</h1>
						<div className="flex items-center justify-end gap-1 py-2">
							<span
								onClick={() => dispatch(removeTodo(todo))}
								className="cursor-pointer hover:text-slate-500"
							>
								<AiTwotoneDelete />
							</span>
							<span
								onClick={() => updateTodoRedux(todo)}
								className="cursor-pointer hover:text-slate-500"
							>
								<AiFillEdit />
							</span>
							<span
								onClick={() => dispatch(todoCompleted(todo))}
								className="cursor-pointer hover:text-slate-500"
							>
								<AiOutlineCheckCircle />
							</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default SingleTodo;
