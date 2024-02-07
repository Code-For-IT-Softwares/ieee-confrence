import React from "react";

const About_the_OPJU = () => {
	return (
		<div className="flex flex-col bg-white py-6 items-center gap-4">
			<div className="i2ctjourneybottomborder mt-4 text-blue-700 pb-2 text-4xl font-bold">
				About The OPJU
			</div>
			{/* <hr className="w-52 h-[10px] text-yellow-900 bg-yellow-600" /> */}
			<div className="pb-3 w-3/4 text-justify">
				OP Jindal University (OPJU) has been established under the aegis
				of the Jindal Education and Welfare Society. The O P Jindal
				Group is a US$ 22 billion conglomerate, employing more than
				50,000 people with manufacturing facilities across India, the
				US, UK, Australia, Indonesia, South Africa, Chile & Mozambique.
				OPJU is a multidisciplinary university aimed at developing young
				professionals and future leaders who will not only power the
				growth and development of the nation but also become responsible
				citizens of the world. At the core of the university's
				philosophy and approach lies the belief that students learn best
				when exposed to real-world situations and when nurtured through
				enriching interactions with practitioners and professors.{" "}
			</div>
			<a
				href="https://www.opju.ac.in"
				className="h-10 px-4 py-2 rounded-full text-white font-bold bg-blue-700"
			>
				Visit Website
			</a>
		</div>
	);
};

export default About_the_OPJU;
