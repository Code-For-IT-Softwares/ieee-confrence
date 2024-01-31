import React from "react";

const FixedBgAttachmentVideo1 = () => {
	return (
		<div className="relative h-[20rem] bg-black">
			<div className="absolute z-10 bg-fixed bg-cover opacity-50 bg-[url('../../public/BG3.jpg')] h-full w-full"></div>
			<div className="flex z-20 absolute  flex-col items-center text-white w-full py-10">
				<h2 className="text-4xl w-2/3 text-center font-bold my-8">
					IEEE Sponsored 1st International Conference on Sustainable
					Power and Energy (ICSPE) 2024
				</h2>
				<p className="text-xl text-center w-4/5">
					The first IEEE-sponsored International Conference on
					Sustainable Power and Energy (ICSPE) 2024 is a biennial
					event hosted by the department of Electrical Engineering, O
					P Jindal University Raigarh, CG, India.
				</p>
			</div>
		</div>
	);
};

export default FixedBgAttachmentVideo1;
