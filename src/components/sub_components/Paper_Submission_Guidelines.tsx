import React from "react";

const Paper_Submission_Guidelines = () => {
	return (
		<div className="flex flex-col w-[70%] m-auto text-black bg-[#ffffff] items-center gap-4">
			<div className="i2ctjourneybottomborder mt-4 pb-2 text-blue-700 text-4xl font-bold">
				Paper Submission Guidelines
			</div>
			{/* <hr className="w-52 h-[10px] text-yellow-900 bg-yellow-600" /> */}
			<div className="pb-10">
				Prospective authors are invited to submit their original full
				paper (maximum 6 pages in IEEE template is available in the
				following link{" "}
				<a
					className="text-blue-800 hover:text-blue-600"
					href="https://www.ieee.org/conferences/publishing/templates.html"
				>
					<u>
						https://www.ieee.org/conferences/publishing/templates.html
					</u>
				</a>
				) in PDF format. Authors are encouraged to provide experimental
				verification of the theoretical concepts. The conference is
				technically supported by{" "}
				<span className="text-[#b32c2c]">
					IEEE Madhya Pradesh Section, IEEE Industrial Electronics
					Society Madhya Pradesh Section, and IEEE Power Electronics
					Society Madhya Pradesh Section.
				</span>{" "}
				All the accepted and presented papers shall be submitted to IEEE
				Xplore Digital Library and are likely to be published as per
				IEEE's guidelines for scope and quality.
			</div>
		</div>
	);
};

export default Paper_Submission_Guidelines;
