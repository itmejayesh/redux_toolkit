import Link from "next/link";
import React from "react";

function NavBar() {
	return (
		<div className="h-0">
			<ul className="flex text-center justify-center p-5 gap-5">
				<Link href={`/`}>Home</Link>
				<Link href={`/counter`}>
					Counter
				</Link>
				<Link href={`/todoapp`}>
					TodoApp
				</Link>
			</ul>
		</div>
	);
}

export default NavBar;
