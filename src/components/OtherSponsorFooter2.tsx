import React from "react";

const OtherSponsorFooter2 = () => {
	return (
		<div className="w-full px-[10%] mx-auto pb-10 bg-[#ffffff]">
			<div className="i2ctjourneybottomborder text-blue-700 m-auto text-center  my-4 pb-2 text-4xl font-bold">
				Other Sponsors
			</div>
			<div className="flex flex-wrap gap-4 justify-center">
			<a href="http://codeforit.in" target="blank">
			<img
					src="CodeForItLogo.png"
					className="w-54 max-[650px]:w-[25%] h-36 max-[650px]:h-[50%]"
					alt="Img"
				/>
			</a>
			</div>
		</div>
	);
};

export default OtherSponsorFooter2;
