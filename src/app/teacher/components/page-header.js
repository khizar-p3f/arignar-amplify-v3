import { Breadcrumb, Button, Col, Flex, Row, Space, Typography } from "antd";
import React from "react";
import { ArrowLeftOutlined, SettingOutlined } from "@ant-design/icons";
import "./index.less";
const PageHeader = ({ BreadcrumbItems, header, descriptions }) => {
	const trimdescriptions = descriptions?.length > 100 ? descriptions?.substring(0, 100) + "..." : descriptions;
	return (
		<div className="wiget-page-header">
			<div className="breadcrumb-container">
				<Breadcrumb
					style={{
						margin: "16px 0",
					}}
					items={BreadcrumbItems || []}
				></Breadcrumb>
			</div>
			<div className="page-header-container">
				<Row gutter={[16, 16]} justify="start" align="middle" className="page-header-content">
					<Col span={1}>
						<Button
							type="default"
							size="large"
							shape="circle"
							icon={<ArrowLeftOutlined />}
							onClick={() => window.history.back()}
						/>
					</Col>
					<Col span={22}>
						<Space direction="vertical" size={0}>
							<Typography.Title level={3}>{header}</Typography.Title>

							<Typography.Paragraph
								style={{
									color: "#6c757d",
								}}
								ellipsis={{
									rows: 2,
									tooltip: descriptions,
								}}
							>
								{trimdescriptions}
							</Typography.Paragraph>
						</Space>
					</Col>
					<Col span={1}>
						<Button type="dashed" size="middle" icon={<SettingOutlined />} />
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default PageHeader;
