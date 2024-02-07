import React from "react";

const About_the_Conference = () => {
	return (
		<div className="flex flex-col text-black bg-white py-6 items-center gap-4">
			<div className="i2ctjourneybottomborder text-blue-700 mt-4 pb-2 text-4xl font-bold">
				About The Conference
			</div>
			{/* <hr className="w-52 h-[10px] text-yellow-900 bg-yellow-600" /> */}
			<div className="pb-3 w-3/4 text-justify">
				The first IEEE-sponsored International Conference on Sustainable
				Power and Energy (ICSPE) 2024 is a biennial event hosted by the
				department of Electrical Engineering, O P Jindal University
				Raigarh, CG, India. It provides a venue for power system
				researchers and engineers from industry, utilities, and academia
				to exchange knowledge, expertise, and experience on the most
				recent breakthroughs in electrical power and related technical
				domains. This conference will include a wide range of
				engineering topics, as well as discussions of real-world
				challenges and solutions. It is planned to host expert seminars
				to share information and promote idea exchange. The gathering
				creates a more conducive environment for scientific
				advancements.
			</div>
			<a
        href="https://www.opju.ac.in"
        className="h-10 px-4 py-2 rounded-full text-white font-bold bg-blue-700"
      >
        All Works
      </a>
		</div>
	);
};

export default About_the_Conference;
