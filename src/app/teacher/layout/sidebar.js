import React, { useState } from "react";
import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
	AccountBookOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import logo from "../../assets/images/logo.png";
import logoCollapsed from "../../assets/images/logo-sm.png";
import { Link } from "@gatsbyjs/reach-router";

const { Sider } = Layout;

const items = [
	{
		key: "1",
		label: <Link to="/">Dashboard</Link>,
		icon: <PieChartOutlined />,
	},
	{
		type: "divider",
	},
	{
		key: "manageClass",
		label: <Link to="/manage_class">Manage Class</Link>,
		icon: <AccountBookOutlined />,
	},
	{
		key: "2",
		label: "Students",
		icon: <TeamOutlined />,
	},
	{
		key: "3",
		label: "Subjects",
		icon: <DesktopOutlined />,
	},
	{
		key: "4",
		label: "Assignments",
		icon: <FileOutlined />,
	},
	{
		key: "5",
		label: "Profile",
		icon: <UserOutlined />,
	},
];

const ArignarTeacherSider = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<Sider
			className="teacher-sider-menu"
			theme="light"
			width={250}
			collapsible
			collapsed={collapsed}
			onCollapse={(value) => setCollapsed(value)}
		>
			<div className="demo-logo-vertical">
				<img src={collapsed ? logoCollapsed : logo} alt="logo" height={55} />
			</div>
			<Menu theme="light" defaultSelectedKeys={["1"]} mode="inline" items={items} />
		</Sider>
	);
};
export default ArignarTeacherSider;
