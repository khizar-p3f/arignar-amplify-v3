import React from "react";

export const IconText = ({ icon, text }) => {
	return (
		<div className="icon-text">
			{React.createElement(icon, {
				style: {
					marginRight: 8,
				},
			})}
			{text}
		</div>
	);
};
