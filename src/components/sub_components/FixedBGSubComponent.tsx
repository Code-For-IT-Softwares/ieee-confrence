import React from "react";

const FixedBGSubComponent = ({ dest }: { dest: string }) => {
	return (
		<div className="relative h-[25rem] my-6">
			<div className="absolute z-10 bg-fixed bg-cover opacity-50 bg-[url('../../public/BG3.jpg')] h-full w-full"></div>
			<div className="flex z-20 absolute  flex-col items-center w-full py-10">
				<h2 className="text-4xl w-2/3 text-center font-bold my-8">
					{dest}
				</h2>
			</div>
		</div>
	);
};

export default FixedBGSubComponent;
