"use client";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import HeadMenuBar2 from "./HeadMenuBar2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Headbar1 = () => {
	const root = useRef();

	gsap.registerPlugin(ScrollTrigger);

	useLayoutEffect(() => {
		let anim = gsap.to("#nav", {
			background: "#0247ff90",
			duration: 5,
			height: "95px",
			scrollTrigger: {
				trigger: "#nav",
				scroller: "body",
				// markers: true,
				start: "top -10%",
				end: "top -13%",
				scrub: 1,
			},
		});

		return () => {
			anim.kill();
		};
	}, []);

	return (
		<div className="w-full">
			<div
				id="nav"
				className="fixed top-0 z-50  bg-transparent w-full h-[110px]  font-bold text-[#cacaca] flex justify-center items-center border-b-[0.05px] border-[#4e4e4e] max-[600px]:justify-start"
			>
				<div className=" flex justify-end   h-full w-1/3  max-[600px]:w-0">
					<div className="text-white">
						<div className=" text-4xl font-bold pr-6 text-center">
							ICSPE 2024
						</div>
						<div className="w-[90%]">
							Technical Co-Sponsor: MP Section
						</div>
					</div>
				</div>
				<div id="triangle" className="self-end"></div>

				<div className="flex headBar h-[100%] items-center w-2/3 gap-8 justify-center max-[600px]:w-[90%] ">
					<HeadMenuBar2 />
					{/* <img src="logo1.jpeg" alt="Logo" />
				<img src="logo2.jpeg" alt="Logo" />
				<img src="logo3.jpeg" alt="Logo" />
				<img src="logo4.jpeg" alt="Logo" />
				<img src="logo4.jpeg" alt="Logo" />
				<img src="logo4.jpeg" alt="Logo" /> */}
				</div>
			</div>
		</div>
	);
};

export default Headbar1;
