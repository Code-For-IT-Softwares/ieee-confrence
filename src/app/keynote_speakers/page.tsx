import FixedBGSubComponent from "@/components/sub_components/FixedBGSubComponent";
import Keynote_Speakers from "@/components/sub_components/Keynote_Speakers";
import React from "react";

const page = () => {
	return (
		<div>
			<FixedBGSubComponent dest={"Keynote Speakers"} />
			<Keynote_Speakers />
		</div>
	);
};

export default page;
