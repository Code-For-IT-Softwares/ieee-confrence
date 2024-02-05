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
			<div className="relative h-screen text-white bg-black w-full overflow-hidden">
				<img
					src={Src}
					alt="cor1"
					className="absolute opacity-70 w-full h-full "
				/>
				<div className="absolute z-10 w-full h-full flex flex-col items-center justify-evenly ">
					<h2 className="font-bold text-[4vw] w-3/4 text-center flex-wrap pt-[120px] max-[600px]:text-[2rem]">
						International Conference on Sustainable Power and Energy
						{/* {typeof window !== "undefined"
							? window.innerWidth > 900
								? "International Conference on Sustainable Power and Energy"
								: "ICPSE"
							: ""}{" "} */}
						<br />
						<span className="font-bold text-[3vw]  text-center flex-wrap max-[600px]:text-[1rem]">
							28<sup>th</sup> -29<sup>th</sup> November, 2024
						</span>
					</h2>
					<p className=" w-3/4 text-center text-[1.5rem] flex-wrap overflow-hidden max-[600px]:w-0 max-[600px]:h-0">
						One of the Most Premium Conference of Asia Pacific
						“Accepted papers will be submitted for inclusion…
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeroCorousel;
