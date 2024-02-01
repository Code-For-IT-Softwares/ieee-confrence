"use client";
import React from "react";
import DropdownCommittees from "./sub_components/DropdownCommittees";

const HeadMenuBar2 = () => {
	return (
		<div className="flex justify-around w-full h-24 items-center">
			<div className="flex flex-wrap gap-[0.6px] my-5">
				<a
					href="../index.html"
					className="py-1	 px-2  rounded-md border-blue-700 hover:bg-blue-500 hover:text-white hover:duration-200"
				>
					Home
				</a>
				<a
					href="../registration.html"
					className="py-1	 px-2  rounded-md border-blue-700 hover:bg-blue-500 hover:text-white hover:duration-200"
				>
					Registration
				</a>
				<a
					href="../call_for_paper.html"
					className="py-1	 px-2  rounded-md border-blue-700 hover:bg-blue-500 hover:text-white hover:duration-200"
				>
					Call for Paper
				</a>

				<a
					href="../committees.html"
					className="py-1	 px-2  rounded-md border-blue-700 hover:bg-blue-500 hover:text-white hover:duration-200"
				>
					Committees
				</a>
				{/* <a className="py-1	 px-2  rounded-md border-blue-700">
					<DropdownCommittees />
				</a> */}
				<a
					href="../keynote_speakers.html"
					className="py-1	 px-2  rounded-md border-blue-700 hover:bg-blue-500 hover:text-white hover:duration-200"
				>
					Keynote Speakers
				</a>
				<a
					href="../contact_us.html"
					className="py-1	 px-2  rounded-md border-blue-700 hover:bg-blue-500 hover:text-white hover:duration-200"
				>
					Contact Us
				</a>
			</div>
			{/* <div className="flex headBar h-[80%] items-center w-1/2 gap-8 justify-center max-[600px]:w-0">
				<img src="logo1.jpeg" alt="Logo" />
				<img src="logo2.jpeg" alt="Logo" />
				<img src="logo3.jpeg" alt="Logo" />
				<img src="logo4.jpeg" alt="Logo" />
			</div> */}
			{/* <div className="flex justify-around gap-4">
        <img
          src=""
          className=" rounded-md border-blue-700 hover:bg-blue-500 hover:text-white hover:duration-200"
          alt="Logo1"
        />
        <img
          src=""
          className=" rounded-md border-blue-700 hover:bg-blue-500 hover:text-white hover:duration-200"
          alt="Logo2"
        />
        <img
          src=""
          className=" rounded-md border-blue-700 hover:bg-blue-500 hover:text-white hover:duration-200"
          alt="Logo3"
        />
      </div> */}
		</div>
	);
};

export default HeadMenuBar2;
