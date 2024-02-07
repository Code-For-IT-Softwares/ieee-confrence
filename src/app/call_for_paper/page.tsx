import Call_for_Papers from "@/components/sub_components/Call_for_Papers";
import FixedBGSubComponent from "@/components/sub_components/FixedBGSubComponent";
import Instructions_to_Authors from "@/components/sub_components/Instructions_to_Authors";
import Paper_Submission_Guidelines from "@/components/sub_components/Paper_Submission_Guidelines";
import React from "react";
import "./CommitteesStyles2.css";

const page = () => {
	return (
		<div className="text-black bg-[#ffffff]">
			<div className="relative h-[25rem] mb-6 bg-black text-white">
				<div className="absolute z-10 bg-fixed bg-fill opacity-80 bg-[url('../../public/opju-bg.jpg')] h-full w-full"></div>
				<div className="flex z-20 absolute  flex-col items-center h-full w-full py-10">
					<h2 className="text-4xl w-2/3  text-center pt-[60px] font-bold my-8 text-white">
						{"Call For Paper"}
					</h2>
					<div className="items-center justify-center pb-10">
						<a
							href="https://cmt3.research.microsoft.com/ICSPE2024"
							className="h-10 px-4 py-3 items-center rounded-full bg-[blue] text-white"
						>
							Paper Submission Link
						</a>
					</div>
				</div>
			</div>
			<Call_for_Papers />
			<Paper_Submission_Guidelines />
			<Instructions_to_Authors />
		</div>
	);
};

export default page;
