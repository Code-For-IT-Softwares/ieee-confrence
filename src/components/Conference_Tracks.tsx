import React from "react";

const Conference_Tracks = () => {
	return (
		<div className="flex flex-col bg-[#eeeeee] py-6 text-black items-center gap-4">
			<div className="i2ctjourneybottomborder text-blue-700 mt-4 pb-2 text-4xl font-bold">
				Conference Tracks (not limited to)
			</div>
			<div className="pb-3 w-2/3 text-left">
				<ul className="text-2xl m-4 flex flex-col gap-6">
					<li>
						Track-1: Power system stability, Operation and Control
					</li>
					<li>
						Track-2: Renewable energy resources and energy storage
					</li>
					<li>
						Track-3: Power electronics drives and Electric vehicle
					</li>
					<li>Track-4: Smart grid and wide area monitoring</li>
					<li>
						Track-5: Data science applications and cyber security in
						power system
					</li>
					<li>Track-6: Energy market and deregulation</li>
					<li>Track-7: Power System Protection</li>
					<li>Track-8: Condition monitoring and HV engineering</li>
					<li>
						Track-9: Soft computing Techniques in electrical
						engineering
					</li>
					<li>
						Track-10: Power electronic applications in power systems
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Conference_Tracks;
