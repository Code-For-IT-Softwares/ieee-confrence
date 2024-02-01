import React from "react";

const Contacts = () => {
	return (
		<div className="flex flex-col bg-[#ffffff]  py-6 items-center gap-4 pb-10">
			<div className="i2ctjourneybottomborder text-blue-700 mt-4 pb-2 text-4xl font-bold">
				Contacts
			</div>
			<div className=" w-[70%] flex items-center flex-wrap justify-around gap-10">
				<div className="flex w-1/3 flex-col items-center max-[800px]:w-3/4">
					<h2 className="text-center text-lg font-bold pt-4">
						Dr. Sushree Diptimayee Swain (Secretary)
					</h2>

					{/* <img
            src="speaker1.jpg"
            alt="Img"
            className="w-8/12 border-4 my-8 rounded-full border-yellow-600 "
          /> */}
					<p className="text-center text-lg">
						Department of Electrical Engineering <br /> O P Jindal
						University Raigarh <br /> Chhattisgarh- 496109, India
					</p>
					<p className="mt-3 text-left text-lg">
						<b>Email:</b> sushree.swain@opju.ac.in <br />
						<b>Phone:</b> 9109977009
					</p>
				</div>
				<div className="flex w-1/3 flex-col items-center max-[800px]:w-3/4">
					<h2 className="text-center text-lg font-bold pt-4">
						Dr. Ankireddy Narendra (Secretary)
					</h2>

					{/* <img
            src="speaker1.jpg"
            alt="Img"
            className="w-8/12 border-4 my-8 rounded-full border-yellow-600 "
          /> */}
					<p className="text-center text-lg">
						Department of Electrical Engineering <br /> O P Jindal
						University Raigarh <br /> Chhattisgarh- 496109, India
					</p>
					<p className="mt-3 text-left text-lg">
						<b>Email:</b> ankireddy.narendra@opju.ac.in <br />
						<b>Phone:</b> 9109909253
					</p>
				</div>

				<div className="flex w-1/3 flex-col items-center max-[800px]:w-3/4">
					<h2 className="text-center text-lg font-bold pt-4">
						Dr. Deepak Singh (Secretary)
					</h2>

					{/* <img
            src="speaker1.jpg"
            alt="Img"
            className="w-8/12 border-4 my-8 rounded-full border-yellow-600 "
          /> */}
					<p className="text-center text-lg">
						Department of Electrical Engineering <br /> O P Jindal
						University Raigarh <br /> Chhattisgarh- 496109, India
					</p>
					<p className="mt-3 text-left text-lg">
						<b>Email:</b> deepak.singh@opju.ac.in <br />
						<b>Phone:</b> 9303870700
					</p>
				</div>
				<div className="flex w-1/3 flex-col items-center max-[800px]:w-3/4">
					<h2 className="text-center text-lg font-bold pt-4">
						Dr. Sandeep Biswal (Convener)
					</h2>

					{/* <img
            src="speaker1.jpg"
            alt="Img"
            className="w-8/12 border-4 my-8 rounded-full border-yellow-600 "
          /> */}
					<p className="text-center text-lg">
						Department of Electrical Engineering <br /> O P Jindal
						University Raigarh <br /> Chhattisgarh- 496109, India
					</p>
					<p className="mt-3 text-left text-lg">
						<b>Email:</b> sandeep.biswal@opju.ac.in <br />
						<b>Phone:</b> 9179339691
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
