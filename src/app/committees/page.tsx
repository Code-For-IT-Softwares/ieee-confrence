import Extended_Support_Committee from "@/components/sub_components/Extended_Support_Committee";
import FixedBGSubComponent from "@/components/sub_components/FixedBGSubComponent";
import International_Advisory_Members from "@/components/sub_components/International_Advisory_Members";
import National_Advisory_Members from "@/components/sub_components/National_Advisory_Members";
import Organizing_Committee from "@/components/sub_components/Organizing_Committee";
import TPC_Members from "@/components/sub_components/TPC_Members";
import React from "react";

import "./CommitteesStyles1.css";

const page = () => {
	return (
		<div>
			<FixedBGSubComponent dest={"Committees"} />

			{/* Heading , Sub headings ka dhyaan rakhna */}
			<Organizing_Committee />
			<National_Advisory_Members />
			<International_Advisory_Members />
			<TPC_Members />
			<Extended_Support_Committee />
		</div>
	);
};

export default page;
