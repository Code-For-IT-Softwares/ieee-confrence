import React from "react";
import Contacts from "@/components/sub_components/Contacts";
import FixedBGSubComponent from "@/components/sub_components/FixedBGSubComponent";
const page = () => {
	return (
		<div>
			<FixedBGSubComponent dest={"Home > Contact Us"} />

			<Contacts />
		</div>
	);
};

export default page;
