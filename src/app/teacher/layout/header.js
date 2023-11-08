import { Avatar, Menu, theme, Layout, Space, Typography, Dropdown, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Auth } from "aws-amplify";
import { navigate } from "@gatsbyjs/reach-router";
import { useDispatch } from "react-redux";
import { logoutUserReducer } from "../../../store/reducers/user";
const { Header } = Layout;

const ArignarTeacherHeader = ({ user }) => {
	const dispatch = useDispatch();
	const { token } = theme.useToken();
	const logoutHandler = () => {
		Modal.confirm({
			title: "Are you sure you want to logout?",
			onOk: () => {
				Auth.signOut().then(() => {
					dispatch(logoutUserReducer());
					navigate(`/`);
				});
			},
		});
	};
	return (
		<Header
			className="teacher-header"
			style={{
				height: 65,
				padding: "0 20px",
				background: token.colorBgContainer,
			}}
		>
			<div className="teacher-header-menu">
				<Menu
					mode="horizontal"
					style={{
						background: token.colorBgContainer,
						borderBottom: "none",
					}}
					items={[
						{
							key: "1",
							label: (
								<Space direction="vertical" size={0}>
									<Typography.Title style={{ margin: 0 }} level={4}>
										Teachers Dashboard
									</Typography.Title>
									<Typography.Text italic>Manage your subjects and students</Typography.Text>
								</Space>
							),
						},
					]}
				/>
			</div>
			<div className="teacher-header-user">
				<Dropdown
					menu={{
						items: [
							{
								key: "1",
								label: "Logout",
								onClick: () => logoutHandler(),
							},
						],
					}}
				>
					<Space size={5}>
						<Avatar
							size={45}
							icon={
								<UserOutlined
									style={{
										fontSize: 32,
									}}
								/>
							}
							style={{
								height: 45,
								marginRight: 10,
							}}
						/>
						<Typography.Text strong>{user?.username}</Typography.Text>
					</Space>
				</Dropdown>
			</div>
		</Header>
	);
};

export default ArignarTeacherHeader;
