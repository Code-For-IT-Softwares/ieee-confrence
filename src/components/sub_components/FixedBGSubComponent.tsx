import React from "react";

const FixedBGSubComponent = ({ dest }: { dest: string }) => {
	return (
		<div className="relative h-[23rem] max-[600px]:h-[12rem] mb-6 bg-black text-white">
			<div className="absolute z-10 bg-fixed bg-fill opacity-80 bg-[url('../../public/opju-bg.jpg')] h-full w-full"></div>
			<div className="flex z-20 absolute  flex-col items-center h-full w-full py-10">
				<h2 className="text-4xl w-2/3  text-center pt-[90px] font-bold my-8 text-white">
					{dest}
				</h2>
				
			</div>
		</div>
	);
};

export default FixedBGSubComponent;
