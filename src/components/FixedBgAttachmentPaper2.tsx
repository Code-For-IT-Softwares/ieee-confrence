import React from "react";

const FixedBgAttachmentPaper2 = () => {
	return (
		<div className="relative h-[30rem] bg-black text-white">
			<div className=" absolute z-10 bg-fixed bg-cover opacity-50 bg-[url('../../public/BG2.jpeg')] h-full w-full"></div>
			<div className="flex z-20 absolute  flex-col items-center w-full py-10">
				<h2 className="text-4xl w-2/3 text-center font-bold my-8">
					IEEE Sponsored 1st International Conference on Sustainable
					Power and Energy (ICSPE) 2024
				</h2>
				<p className="text-xl">
					“The premier conference for the latest discoveries in
					Convergence in Technology”
				</p>
			</div>
		</div>
	);
};

export default FixedBgAttachmentPaper2;
