import React from "react";
import {
	Breadcrumb,
	Button,
	Card,
	Col,
	Divider,
	Drawer,
	Flex,
	Form,
	Input,
	Modal,
	Row,
	Select,
	Space,
	Spin,
	Table,
	Typography,
} from "antd";
import "./manage_class.less";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNameById, teachersAPI } from "../api";
import { updateClassReducer } from "../../../store/reducers/teacher";
import { useState } from "react";
import PageHeader from "../components/page-header";
import { FileAddOutlined, OrderedListOutlined, TableOutlined } from "@ant-design/icons";
import { IconText } from "../components/icon-text";
const TeachersManageClass = () => {
	const dispatch = useDispatch();
	const teacher = useSelector((state) => state.teacher);
	const { classes } = teacher;
	const [classLoaded, setClassLoaded] = useState(false);
	const [data, setData] = useState([]);
	const [view, setView] = useState("list");
	const [searchText, setSearchText] = useState("");
	const [showAddClassModal, setShowAddClassModal] = useState(false);
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	useEffect(() => {
		if (!classes.isLoaded) {
			teachersAPI.listAllClassesAPI().then((response) => {
				dispatch(updateClassReducer(response?.data?.listClasses?.items || []));
				setClassLoaded(true);
				setData(response?.data?.listClasses?.items || []);
			});
		} else {
			setData(classes.data);
			setClassLoaded(true);
		}
	}, [classes.isLoaded]);

	const filterData = (text) => {
		setSearchText(text);
		const filteredData = classes.data.filter((item) => item.Name.toLowerCase().includes(text.toLowerCase()));
		setData(filteredData);
	};
	const tableColumns = [
		{
			title: "Name",
			dataIndex: "Name",
			key: "Name",
			width: 200,
		},
		{
			title: "Description",
			dataIndex: "Description",
			key: "Description",
			width: 300,
			elipsis: true,
		},
		{
			title: "Subject",
			dataIndex: "SubjectID",
			key: "SubjectID",
			render: (text) => teacher.subjects.data.find((subject) => subject.id === text)?.Name,
		},
		{
			title: "Action",
			dataIndex: "Action",
			key: "Action",
		},
	];

	return (
		<section className="manage-class">
			<PageHeader
				BreadcrumbItems={[
					{
						title: "Home",
					},
					{
						title: "Teacher",
					},
					{
						title: "Manage Class",
					},
				]}
				header="Manage Class"
				descriptions="In this section you can manage your class eg. add new class, edit class, delete class"
			/>

			<div className="manage-class-container">
				<Row gutter={[16, 16]} justify="start" align="middle">
					{classLoaded ? (
						<Col span={24}>
							{/* Tool bar */}
							<Row gutter={[16, 16]} justify="start" align="middle" style={{ margin: "30px 0" }}>
								<Col span={24} className="toolbar">
									<Row gutter={[16, 16]} justify="start" align="middle">
										<Col flex={1}>
											<Input.Search
												onChange={(e) => filterData(e.target.value)}
												value={searchText}
												size="large"
												placeholder="Search Class"
												enterButton
												enterKeyHint="search"
											/>
										</Col>
										<Col flex={0}>
											<Button
												size="large"
												type="primary"
												icon={<FileAddOutlined />}
												onClick={() => setShowAddClassModal(true)}
											>
												Add Class
											</Button>
										</Col>

										<Col flex={0}>
											<Button.Group size="large">
												<Button
													type={view === "list" ? "primary" : "default"}
													onClick={() => setView("list")}
													icon={<OrderedListOutlined />}
												/>
												<Button
													type={view === "grid" ? "primary" : "default"}
													onClick={() => setView("grid")}
													icon={<TableOutlined />}
												/>
											</Button.Group>
										</Col>
									</Row>
								</Col>
							</Row>

							{/* Content view based on user selection */}
							<Row gutter={[16, 16]} justify="start" align="middle">
								{view === "list" ? (
									data.map((item) => (
										<Col span={8} key={item.id}>
											<Card
												actions={[
													<Typography.Text key={1}>Edit</Typography.Text>,
													<Typography.Text key={2}>Delete</Typography.Text>,
												]}
												bordered
												style={{
													cursor: "pointer",
												}}
											>
												<Flex gap={0} vertical justify="start" align="flex-start">
													<Typography.Title level={4}>{item.Name}</Typography.Title>
													<div style={{ minHeight: 100 }}>
														<Typography.Paragraph ellipsis={{ rows: 2, tooltip: item.Description }}>
															{item.Description}
														</Typography.Paragraph>
													</div>
													<Flex
														gap={10}
														justify="space-between"
														align="center"
														style={{
															width: "100%",
														}}
													>
														<IconText
															icon={OrderedListOutlined}
															text={teacher.subjects.data.find((subject) => subject.id === item.SubjectID)?.Name}
														/>
														<IconText icon={OrderedListOutlined} text="Subject" />
													</Flex>
												</Flex>
											</Card>
										</Col>
									))
								) : (
									<Col span={24}>
										<Table rowKey={(record) => record.id} dataSource={data} columns={tableColumns} />
									</Col>
								)}
							</Row>
						</Col>
					) : (
						<Spin />
					)}
				</Row>

				{/* Add Class Modal */}
				<Drawer title="Add Class" placement="right" closable={false} open={showAddClassModal} width={500}>
					<Form size="large" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
						<Form.Item
							label="Name"
							name="name"
							rules={[
								{
									required: true,
									message: "Please input your username!",
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Description"
							name="description"
							rules={[
								{
									required: true,
									message: "Please input your password!",
								},
							]}
						>
							<Input.TextArea />
						</Form.Item>

						<Form.Item
							label="Subject"
							name="subject"
							rules={[
								{
									required: true,
									message: "Please input your password!",
								},
							]}
						>
							<Select>
								{teacher.subjects.data.map((subject) => (
									<Select.Option key={subject.id} value={subject.id}>
										{subject.Name}
									</Select.Option>
								))}
							</Select>
						</Form.Item>
						<Divider />
						<Form.Item>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
							<Button
								style={{
									marginLeft: 10,
								}}
								onClick={() => setShowAddClassModal(false)}
							>
								Cancel
							</Button>
						</Form.Item>
					</Form>
				</Drawer>
				{/* Add Class Modal */}
			</div>
		</section>
	);
};

export default TeachersManageClass;
