import React from "react";

const Important_Dates = ({ h }: { h: number }) => {
	return (
		<div className="flex flex-col bg-[#ffffff] text-blue-700  pt-6 pb-10 items-center gap-4">
			{h ? (
				<h2 className="i2ctjourneybottomborder mt-4 pb-2 text-4xl font-bold ">
					Important Dates
				</h2>
			) : (
				""
			)}

			<div className="flex text-black w-full gap-32 m-2 justify-center ">
				<div>
					Call for Proposal Date: <br />
					Full Paper Submission Date: <br />
					Notification of Acceptance Date: <br />
					Final Paper Submission Date:
					<br />
					Conference Date:
				</div>
				<div>
					2024-03-20 <br /> 2024-09-30 <br />
					2024-10-30 <br />
					2024-11-15 <br />
					2024-11-28 to 2024-11-29
				</div>
			</div>
		</div>
	);
};

export default Important_Dates;
