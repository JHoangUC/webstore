import React from "react";
import { motion } from "framer-motion";

const variants = {
	default: { width: 0 },
	active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
	const buttonClasses = active ? "opacity-60 text-blue-600  font-bold scale-110 border-gray-800 bg-[#ebe9e9]" : "text-black"; //text-blue-600

	return (
		<button onClick={selectTab}>
			<p
				className={
							`pt-3 bg-[#f5f5f5] h-15 flex-grow 
							inline-block p-4 
							hover:text-blue-600 hover:scale-110
							
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
