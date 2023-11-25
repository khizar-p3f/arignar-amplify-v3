import { Breadcrumb, Button, Col, Flex, Row, Typography } from "antd";
import React from "react";
import { ArrowLeftOutlined, SettingOutlined } from "@ant-design/icons";
import "./index.less";
const PageHeader = ({ BreadcrumbItems, header, descriptions }) => {
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
				<Row gutter={[16, 16]} justify="space-between" align="middle" className="page-header-content">
					<Col flex={0}>
						<Button
							type="default"
							size="large"
							shape="circle"
							icon={<ArrowLeftOutlined />}
							onClick={() => window.history.back()}
						/>
					</Col>
					<Col flex={1}>
						<Flex vertical gap={0}>
							<Typography.Title level={2}>{header}</Typography.Title>
							<Typography.Text>{descriptions}</Typography.Text>
						</Flex>
					</Col>
					<Col flex={0}>
						<Button type="dashed" size="middle" icon={<SettingOutlined />} />
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default PageHeader;
