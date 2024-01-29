"use client";
import React, { useState } from "react";

const HeroCorousel = () => {
	const [Cor, setCor] = useState(0);
	const [Src, setSrc] = React.useState<string>("cor1.jpg");
	var arr: String[] = ["cor1.jpg", "cor2.png", "cor3.jpg"];
	setTimeout(() => {
		setCor((Cor + 1) % 3);
		// eslint-disable-next-line
		setSrc(arr[Cor].toString());
	}, 2000);
	return (
		<div>
			<div className="relative h-[35rem] text-white bg-black w-full overflow-hidden">
				<img
					src={Src}
					alt="cor1"
					className="absolute opacity-70 w-full h-full "
				/>
				<div className="absolute z-10 w-full h-full flex flex-col items-center justify-evenly ">
					<h2 className="font-bold text-6xl w-3/4 text-center flex-wrap">
						International Conference on Sustainable Power and Energy{" "}
						<br />
						<span className="font-bold text-4xl  text-center flex-wrap">
							28<sup>th</sup> -29<sup>th</sup> November, 2024
						</span>
					</h2>
					<p className=" w-3/4 text-center text-xl flex-wrap">
						One of the Most Premium Conference of Asia Pacific
						“Accepted papers will be submitted for inclusion…
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeroCorousel;
