import Important_Dates from "@/components/Important_Dates";
import FixedBGSubComponent from "@/components/sub_components/FixedBGSubComponent";
import Registration from "@/components/sub_components/Registration";
import React from "react";

const page = () => {
	return (
		<div>
			<FixedBGSubComponent dest={"Registration"} />
			<Important_Dates h={0} />
			<Registration />
		</div>
	);
};

export default page;
