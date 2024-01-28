import React from "react";

function ProfileCard({
	profilePicLink = "image.jpg",
	name = "name",
	designation = "designation",
	institution = "institution",
	location = "location",
}) {
	return (
		<div
			className="font-serif text-[8px] h-44 w-32  p-2 text-center flex flex-col 
    rounded-md bg-gray-200 m-2"
		>
			<img
				className=" bg-gray-500 size-28 rounded-full  items-center"
				src={profilePicLink}
			></img>
			<div className="text-gray-800  text-[10px]">
				<b>{name}</b>
			</div>
			<div className="text-gray ">{designation}</div>
			<div className="text-gray text-[7px]">{institution}</div>
			<div className="text-gray text-[7px]">{location}</div>
		</div>
	);
}
export default ProfileCard;
