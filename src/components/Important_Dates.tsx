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
						<td>March 20<sup>th</sup>, 2024</td>
					</tr>
					<tr>
						<td>Full Paper Submission Date:</td>
						<td>September 30<sup>th</sup>, 2024</td>
					</tr>
					<tr>
						<td>Notification of Acceptance Date:</td>
						<td>October 30<sup>th</sup>, 2024</td>
					</tr>
					<tr>
						<td>Final Paper Submission Date:</td>
						<td>November 15<sup>th</sup>, 2024</td>
					</tr>
					<tr>
						<td>Conference Date:</td>
						<td>
							November 28<sup>th</sup>-29<sup>th</sup>, 2024
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Important_Dates;
