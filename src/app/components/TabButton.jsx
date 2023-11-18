import React from "react";
import { motion } from "framer-motion";

const variants = {
	default: { width: 0 },
	active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
	const buttonClasses = active ? "opacity-60 text-gray-700 border-b-2 border-gray-400 bg-gray-100" : "text-black";

	return (
		<button onClick={selectTab}>
			<p
				className={
							`pt-3 bg-[#bebebe] h-15 shadow-none flex-grow 
							inline-block p-4 border-black 
							hover:text-gray-600 hover:border-gray-300
							
	${buttonClasses}`}
			>
				{children}
			</p>
			<motion.div
				animate={active ? "active" : "default"}
				variants={variants}
				className="h-1 bg-primary-500 mt-2 mr-3"
			></motion.div>
		</button>
	);
};

export default TabButton;
