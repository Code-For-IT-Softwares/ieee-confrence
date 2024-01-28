import React from "react";
import Manuscript_Style_Information from "./sub_sub_components/Manuscript_Style_Information";
import Camera_Ready_Paper_Submissions from "./sub_sub_components/Camera_Ready_Paper_Submissions";

const Instructions_to_Authors = () => {
	return (
		<div className="flex flex-col w-[70%] m-auto bg-[#181A1B] items-center gap-4">
			<div className="i2ctjourneybottomborder mt-4 pb-2 text-4xl font-bold">
				Instructions to Authors
			</div>
			<Manuscript_Style_Information />
			<Camera_Ready_Paper_Submissions />
		</div>
	);
};

export default Instructions_to_Authors;
