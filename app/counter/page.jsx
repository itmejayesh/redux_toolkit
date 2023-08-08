"use client";
import {
	decrement,
	increment,
	reset,
} from "@/Redux/counter_slice/counterSlice";
import React from "react";
import {
	useDispatch,
	useSelector,
} from "react-redux";

function Counter() {
	const counter = useSelector(
		(state) => state.counter.value
	);
	const dispatch = useDispatch();

	return (
		<main className="w-full h-screen text-white">
			<div className="text-center py-[10rem] flex items-center gap-8 justify-center">
				<button
					onClick={() =>
						dispatch(increment())
					}
					className="border px-3 py-2 rounded-md hover:bg-white/20"
				>
					Increment
				</button>
				<span>{counter}</span>
				<button
					onClick={() =>
						dispatch(decrement())
					}
					className="border px-3 py-2 rounded-md hover:bg-white/20"
				>
					Decrement
				</button>
				<button
					onClick={() =>
						dispatch(reset())
					}
					className="border px-3 py-2 rounded-md hover:bg-white/20"
				>
					Reset
				</button>
			</div>
		</main>
	);
}

export default Counter;
