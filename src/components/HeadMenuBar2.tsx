import React from "react";

const HeadMenuBar2 = () => {
	return (
		<div className="flex justify-around w-2/3 items-center">
			<div className="flex flex-wrap gap-[0.6px] my-5">
				<a
					href="/"
					className="py-1	 px-2  rounded-md border-yellow-700 hover:bg-yellow-700 hover:duration-200"
				>
					Home
				</a>
				<a
					href="/registration"
					className="py-1	 px-2  rounded-md border-yellow-700 hover:bg-yellow-700 hover:duration-200"
				>
					Registration
				</a>
				<a
					href="/call_for_paper"
					className="py-1	 px-2  rounded-md border-yellow-700 hover:bg-yellow-700 hover:duration-200"
				>
					Call for Paper
				</a>
				<a
					href="/committees"
					className="py-1	 px-2  rounded-md border-yellow-700 hover:bg-yellow-700 hover:duration-200"
				>
					Committees
				</a>
				<a
					href="/keynote_speakers"
					className="py-1	 px-2  rounded-md border-yellow-700 hover:bg-yellow-700 hover:duration-200"
				>
					Keynote Speakers
				</a>
				<a
					href="/contact_us"
					className="py-1	 px-2  rounded-md border-yellow-700 hover:bg-yellow-700 hover:duration-200"
				>
					Contact Us
				</a>
			</div>
			{/* <div className="flex justify-around gap-4">
        <img
          src=""
          className=" rounded-md border-yellow-700 hover:bg-yellow-700 hover:duration-200"
          alt="Logo1"
        />
        <img
          src=""
          className=" rounded-md border-yellow-700 hover:bg-yellow-700 hover:duration-200"
          alt="Logo2"
        />
        <img
          src=""
          className=" rounded-md border-yellow-700 hover:bg-yellow-700 hover:duration-200"
          alt="Logo3"
        />
      </div> */}
		</div>
	);
};

export default HeadMenuBar2;
