"use client";
import React, {useEffect, useState} from "react";
import {BsEmojiSmile} from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import SingleTodo from "@/components/SingleTodo";
import {useDispatch} from "react-redux";
import {addTodo, updateTodo} from "@/Redux/todo_slice/todoSlice";

function page() {
	const [showEmoji, setShowEmoji] = useState(false);
	const [text, setText] = useState("");
	const [editTodo, setEditTodo] = useState(null);
	const [todoList, setTodoList] = useState([]);

	//?localStorage without reducer
	// useEffect(() => {
	// 	if (typeof window !== "undefined") {
	// 		const storedTodoList = JSON.parse(localStorage.getItem("todo")) || [];
	// 		setTodoList(storedTodoList);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	if (typeof window !== "undefined") {
	// 		localStorage.setItem("todo", JSON.stringify(todoList));
	// 	}
	// }, [todoList]);

	//?add emoji

	const addEmoji = (e) => {
		const symbols = e.unified.split("_");
		const codeArray = [];
		symbols.forEach((el) => codeArray.push("0x" + el));
		let emoji = String.fromCodePoint(...codeArray);
		setText(text + emoji);
	};

	useEffect(() => {
		if (editTodo) {
			setText(editTodo.text);
		} else {
			setText("");
		}
	}, [editTodo]);

	//?updateTodoList
	// const updateTodo = (text, id, completed) => {
	// 	const newTodo = todoList.map((todo) => {
	// 		return todo.id === id
	// 			? {text, id, completed: false, time: new Date()}
	// 			: todo;
	// 	});
	// 	setTodoList(newTodo);
	// 	setEditTodo(null);
	// 	setText("");
	// };

	//? add todo
	// const addTodo = () => {
	// 	if (!editTodo) {
	// 		const id = Math.random(Math.round() * 1000000000);
	// 		const todo = {
	// 			id,
	// 			text,
	// 			completed: false,
	// 			time: new Date(),
	// 		};
	// 		setTodoList([...todoList, todo]);
	// 		setText("");
	// 		setShowEmoji(false);
	// 	} else {
	// 		updateTodo(text, editTodo.id, editTodo.completed);
	// 	}
	// };

	const dispatch = useDispatch(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!editTodo) {
			dispatch(
				addTodo({
					id: Math.random(Math.round() * 1000000000),
					text,
					completed: false,
					time: new Date(),
				})
			);
		} else {
			dispatch(
				updateTodo({
					id: editTodo.id,
					text,
					completed: editTodo.completed,
					time: new Date(),
				})
			);
			setEditTodo(false);
		}
		setText("");
		setShowEmoji(false);
	};

	return (
		<div className="pt-3rem w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] mx-auto mt-[11rem]">
			<h1 className="text-2xl font-medium text-center capitalize pb-[2rem]">
				Todo List
			</h1>
			{/* todo form */}
			<form
				onSubmit={handleSubmit}
				className="flex items-start gap-2 pt-[2rem]"
			>
				<div className="w-full flex items-end p-2 bg-gray-700 rounded-sm relative">
					<textarea
						value={text}
						onChange={(e) => setText(e.target.value)}
						id=""
						cols="30"
						rows="2"
						placeholder="write your text"
						className="w-full bg-transparent outline-none resize-none text-sm"
					/>
					<span
						onClick={() => setShowEmoji(!showEmoji)}
						className="cursor-pointer transition-all ease-in-out"
					>
						<BsEmojiSmile />
					</span>
					{showEmoji && (
						<div className="absolute top-[100%] right-2">
							<Picker
								data={data}
								emojiSize={20}
								emojiButtonSize={28}
								onEmojiSelect={addEmoji}
								maxFrequentRows={0}
							/>
						</div>
					)}
				</div>

				<button
					className="flex items-center capitalize gap-2 bg-yellow-300 text-black py-1.5
				px-3 rounded-sm hover:bg-yellow-100"
				>
					<AiOutlinePlus />
					{editTodo ? "update" : "add"}
				</button>
			</form>
			<div className="mt-[2rem]">
				<SingleTodo setEditTodo={setEditTodo} />
			</div>
		</div>
	);
}

export default page;
