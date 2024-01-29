import { icon } from "@fortawesome/fontawesome-svg-core";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Headbar1 = () => {
	return (
		<div className="w-full h-[110px]  text-[#cacaca] font-medium flex justify-center items-center border-b-[0.05px] border-[#4e4e4e]">
			<div className="bg-[#8A5E00] flex justify-end   h-full w-1/3">
				<div className="text-[#ebeaea]">
					<div className=" text-4xl font-bold pr-6 text-center">
						ICSPE 2024
					</div>
					<div className="w-[90%]">
						Technical Co-Sponsor: MP Section
					</div>
				</div>
			</div>
			<div id="triangle" className="self-end"></div>

			<div className="flex headBar h-[100%] items-center w-2/3 gap-8 justify-center">
				<img src="logo1.jpeg" alt="Logo" />
				<img src="logo2.jpeg" alt="Logo" />
				<img src="logo3.jpeg" alt="Logo" />
				<img src="logo4.jpeg" alt="Logo" />
			</div>
		</div>
	);
};

export default Headbar1;
