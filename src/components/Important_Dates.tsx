import React from "react";

const Important_Dates = ({ h }: { h: number }) => {
	return (
		<div className="flex flex-col bg-[#ffffff] text-blue-700  pt-6 pb-10 items-center gap-4">
			{h ? (
				<h2 className="i2ctjourneybottomborder mt-4 pb-2 text-4xl font-bold ">
					Important Dates
				</h2>
			) : (
				""
			)}

			<table id="impdates" className=" text-black  mx-auto  ">
				<tbody>
					<tr>
						<td>Call for Proposal Date:</td>
						<td>2024-03-20</td>
					</tr>
					<tr>
						<td>Full Paper Submission Date:</td>
						<td>2024-09-30</td>
					</tr>
					<tr>
						<td>Notification of Acceptance Date:</td>
						<td>2024-10-30</td>
					</tr>
					<tr>
						<td>Final Paper Submission Date:</td>
						<td>2024-11-15</td>
					</tr>
					<tr>
						<td>Conference Date:</td>
						<td>
							2024-11-28 <br />
							to 2024-11-29
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Important_Dates;
