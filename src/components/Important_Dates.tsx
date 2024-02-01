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

			<ul id="impdates" className=" text-black  mx-auto  ">
				<li>
					<span>Call for Proposal Date:</span>
					<span>2024-03-20</span>
				</li>
				<li>
					<span>Full Paper Submission Date:</span>
					<span>2024-09-30</span>
				</li>
				<li>
					<span>Notification of Acceptance Date:</span>
					<span>2024-10-30</span>
				</li>
				<li>
					<span>Final Paper Submission Date:</span>
					<span>2024-11-15</span>
				</li>
				<li>
					<span>Conference Date:</span>
					<span>
						2024-11-28 <br />
						to 2024-11-29
					</span>
				</li>
			</ul>
		</div>
	);
};

export default Important_Dates;
