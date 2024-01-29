import React from "react";

function Registration() {
	return (
		<div className="w-screen flex justify-center my-4">
			<table className="text-center font-serif text-2xl border-blue-900 border-solid  border-separate  border-2">
				<thead>
					<tr>
						<th className=" text-center  p-4   border-separate text-4xl  border-2">
							Category
						</th>
						<th className=" text-center  p-4   border-separate text-4xl  border-2">
							Active IEEE Memnber
						</th>
						<th className=" text-center  p-4   border-separate text-4xl  border-2">
							Non IEEE Memnber
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>(Author)</td>
						<td>INR | USD</td>
						<td>INR | USD</td>
					</tr>
					<tr>
						<td>Full time student/research scholar</td>
						<td>Rs 6000 | $90</td>
						<td>Rs 7000 | $110</td>
					</tr>
					<tr>
						<td>Academician</td>
						<td>Rs 7000 | $110</td>
						<td>Rs 8000 | $125</td>
					</tr>
					<tr>
						<td>Industry</td>
						<td>Rs 9000 | $130</td>
						<td>Rs 10000 | $140</td>
					</tr>
					<tr>
						<td>Participants/extra/AuthoRs Listener</td>
						<td className=" td1">Rs 2000</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Registration;
