import React from "react";
import Manuscript_Style_Information from "./sub_sub_components/Manuscript_Style_Information";
import Camera_Ready_Paper_Submissions from "./sub_sub_components/Camera_Ready_Paper_Submissions";

const Instructions_to_Authors = () => {
	return (
		<div>
			<Manuscript_Style_Information />
			<Camera_Ready_Paper_Submissions />
		</div>
	);
};

export default Instructions_to_Authors;
