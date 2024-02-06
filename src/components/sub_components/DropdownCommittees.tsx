import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";

const DropdownCommittees = () => {
	const [position, setPosition] = useState("bottom");
	return (
		<div
			className="text-center 
					  rounded-md border-blue-700 hover:bg-blue-500 hover:text-white hover:duration-200"
		>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button id="btn">Committees</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="bg-slate-100  text-black z-50 w-56">
					<DropdownMenuSeparator />
					<DropdownMenuRadioGroup
						value={position}
						onValueChange={setPosition}
					>
						<DropdownMenuRadioItem
							className="hover:bg-blue-400"
							value="top"
						>
							<a
								href="../committees.html"
								className="  "
							>
								Organizing_Committee
							</a>
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem
							className="hover:bg-blue-400"
							value="bottom"
						>
							<a
								href="../committees.html#National_Advisory_Members"
								className="  "
							>
								National_Advisory_Members
							</a>
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem
							className="hover:bg-blue-400"
							value="right"
						>
							<a href="../committees.html#TPC_Members" className="  ">
								TPC_Members
							</a>
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem
							className="hover:bg-blue-400"
							value="right"
						>
							<a
								href="../committees.html#Extended_Support_Committee"
								className="  "
							>
								Extended_Support_Committee
							</a>
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
				<script></script>
			</DropdownMenu>
		</div>
	);
};

export default DropdownCommittees;
