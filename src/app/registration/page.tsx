import FixedBGSubComponent from "@/components/sub_components/FixedBGSubComponent";
import Registration from "@/components/sub_components/Registration";
import React from "react";

const page = () => {
	return (
		<div>
			<FixedBGSubComponent dest={"Home > Registration"} />
			<Registration />
		</div>
	);
};

export default page;
