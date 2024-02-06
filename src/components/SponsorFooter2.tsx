import React from "react";

const SponsorFooter2 = () => {
	return (
		<div className="w-full px-[10%] mx-auto pb-10 bg-[#ffffff]">
			<div className="i2ctjourneybottomborder text-blue-700 m-auto text-center  my-4 pb-2 text-4xl font-bold">
				Technical Sponsors
			</div>
			<div className="flex flex-wrap gap-8 justify-center">
				<a href="https://ieeemp.org/" target="blank"><img src="ieee-mp-section.jpeg" alt="Img" className="w-54 max-[650px]:w-[25%] h-36 max-[650px]:h-[50%]"/></a>
				<a href="https://students.ieee.org/student-branches/" target="blank"><img src="ieee-student-section.jpeg" alt="Img" className="w-54 max-[650px]:w-[25%] h-36 max-[650px]:h-[50%]"/></a>
				<a href="https://ewh.ieee.org/r10/delhi/pel-ie.html" target="blank"><img src="pels-logo.jpeg" alt="Img" className="w-54 max-[650px]:w-[25%] h-36 max-[650px]:h-[50%]"/></a>
				<a href="https://ieee-pes.org/" target="blank"><img src="ieee-pes.png" alt="Img" className="w-54 max-[650px]:w-[25%] h-36 max-[650px]:h-[50%]"/></a>
				{/* <img src="logo5.jpeg" alt="Img" className="w-54 max-[650px]:w-[25%] h-36 max-[650px]:h-[50%]"/> */}
				{/* <img src="logo6.jpeg" alt="Img" className="w-54 max-[650px]:w-[25%] h-36 max-[650px]:h-[50%]"/> */}
			</div>
		</div>
	);
};

export default SponsorFooter2;
