import { Typography } from "antd";
import React from "react";

export const IconText = ({ icon, text }) => {
	return (
		<div className="icon-text">
			{React.createElement(icon, {
				style: {
					marginRight: 8,
				},
			})}
			<Typography.Paragraph
				ellipsis={{
					expandable: false,
					rows: 1,
					tooltip: text,
				}}
			>
				{text}
			</Typography.Paragraph>
		</div>
	);
};
