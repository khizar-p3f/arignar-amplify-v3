import React from "react";
import {
	Avatar,
	Badge,
	Breadcrumb,
	Button,
	Card,
	Col,
	Divider,
	Drawer,
	Empty,
	Flex,
	Form,
	Input,
	Modal,
	Row,
	Select,
	Space,
	Spin,
	Switch,
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
import {
	FileAddOutlined,
	OrderedListOutlined,
	TableOutlined,
	UserOutlined,
	CustomerServiceOutlined,
} from "@ant-design/icons";
import classRoom from "../../assets/images/class-room.png";
import { Link } from "@gatsbyjs/reach-router";

const TeachersManageClass = () => {
	const dispatch = useDispatch();
	const teacher = useSelector((state) => state.teacher);
	const { classes } = teacher;
	const [classLoaded, setClassLoaded] = useState(false);
	const [data, setData] = useState([]);
	const [view, setView] = useState("list");
	const [searchText, setSearchText] = useState("");
	const [showAddClassModal, setShowAddClassModal] = useState(false);
	const [selectedSubject, setSelectedSubject] = useState(null);
	const [selectedLevel, setSelectedLevel] = useState(null);
	const [selectedClass, setSelectedClass] = useState(null);
	const [form] = Form.useForm();

	// to add new class
	const addClass = (values) => {
		const insertClassData = {
			Name: values.Name,
			Description: values.Description,
			SubjectID: values.subject,
			LevelID: values.level,
			RegistrationCode: values.RegistrationCode,
			IsActive: true,
		};
		Modal.confirm({
			title: "Confirm",
			content: "Are you sure you want to add this class?",
			okText: "Yes",
			cancelText: "No",
			onOk: () => {
				teachersAPI.addClassAPI(insertClassData).then((response) => {
					if (response?.data?.createClasses?.id) {
						Modal.success({
							title: "Class Added Successfully",
							content: (
								<div>
									<p>
										Your class has been added successfully. Please note down the registration code for your class. You
										can share this code with your students to join your class.
									</p>
									<p>
										<strong>Registration Code:</strong> {response?.data?.createClasses?.RegistrationCode}
									</p>
								</div>
							),
							onOk: () => {
								setShowAddClassModal(false);
								dispatch(
									updateClassReducer({
										isLoaded: false,
										data: [],
									})
								);
								resetClassHandler();
							},
						});
					}
				});
			},
		});
	};
	//if user selected any card from list view, the slected item will be stored in selectedClass state to update class
	const updateClass = (values) => {
		const updateClassData = {
			id: selectedClass.id,
			Name: values.Name,
			Description: values.Description,
			SubjectID: values.subject,
			LevelID: values.level,
			RegistrationCode: values.RegistrationCode,
			IsActive: values.IsActive,
		};
		Modal.confirm({
			title: "Confirm",
			content: "Are you sure you want to update this class?",
			okText: "Yes",
			cancelText: "No",
			onOk: () => {
				teachersAPI.updateClassAPI(updateClassData).then((response) => {
					if (response?.data?.updateClasses?.id) {
						Modal.success({
							title: "Class Updated Successfully",
							content: (
								<div>
									<p>Your class has been updated successfully.</p>
								</div>
							),
							onOk: () => {
								setShowAddClassModal(false);
								dispatch(
									updateClassReducer({
										isLoaded: false,
										data: [],
									})
								);
								resetClassHandler();
							},
						});
					}
				});
			},
		});
	};

	//if user not filled all the required fields, this function will be called
	const onFinishFailed = (errorInfo) => {
		Modal.error({
			title: "Error",
			content: "Please fill all the required fields",
		});
		console.log({ errorInfo });
	};

	// to get all the classes
	useEffect(() => {
		if (classes.isLoaded) {
			setData(classes.data);
			setClassLoaded(true);
		}
	}, [classes.isLoaded]);

	// to filter the classes based on user search
	const filterData = (text) => {
		setSearchText(text);
		const filteredData = classes.data.filter((item) => item.Name.toLowerCase().includes(text.toLowerCase()));
		setData(filteredData);
	};

	// to edit the class details
	const editClassHandler = (item) => {
		form.setFieldsValue({
			Name: item.Name,
			Description: item.Description,
			subject: item.SubjectID,
			level: item.LevelID,
			RegistrationCode: item.RegistrationCode,
			IsActive: item.IsActive,
		});
		setSelectedSubject(item.SubjectID);
		setSelectedLevel(item.LevelID);
		setSelectedClass(item);
		setShowAddClassModal(true);
	};
	// to reset the form
	const resetClassHandler = () => {
		form.resetFields();
		setSelectedClass(null);
		setShowAddClassModal(false);
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
			render: (text) => <Typography.Paragraph ellipsis={{ rows: 2, tooltip: text }}>{text}</Typography.Paragraph>,
		},
		{
			title: "Subject",
			dataIndex: "SubjectID",
			key: "SubjectID",
			render: (text) => teacher.subjects.data.find((subject) => subject.id === text)?.Name,
		},
		{
			title: "Level",
			dataIndex: "LevelID",
			key: "LevelID",
			render: (text, record) =>
				teacher.subjects.data
					.find((subject) => subject.id === record.SubjectID)
					?.Levels.items.find((level) => level.id === text)?.Name,
		},
		{
			title: "Registration Code",
			dataIndex: "RegistrationCode",
			key: "RegistrationCode",
		},
		{
			title: "Status",
			dataIndex: "IsActive",
			key: "IsActive",
			render: (text) => (text ? <Badge status="success" text="Active" /> : <Badge status="error" text="Inactive" />),
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
							<Row gutter={[24, 16]} justify="start" align="middle">
								{view === "list" ? (
									data.length > 0 ? (
										data.map((item) => {
											let subject = teacher.subjects.data.find((subject) => subject.id === item.SubjectID)?.Name;
											let levels = teacher.subjects.data
												.find((subject) => subject.id === item.SubjectID)
												.Levels.items.find((level) => level.id === item.LevelID)?.Name;
											return (
												<Col span={6} key={item.id}>
													<Badge.Ribbon
														text={item.IsActive ? "Active Class Room" : "Inactive Class Room"}
														color={item.IsActive ? "green" : "red"}
														placement="end"
													>
														<Card
															actions={[
																<Button type="link" key={1} onClick={() => editClassHandler(item)}>
																	Edit
																</Button>,
																<Typography.Text key={2}>Delete</Typography.Text>,
															]}
															bordered
															style={{
																cursor: "pointer",
															}}
														>
															<Flex gap={0} vertical justify="start" align="flex-start">
																<Link to={`/class/${item.id}`} style={{ textDecoration: "none", width: "100%" }}>
																	<Typography.Title level={4}>{item.Name}</Typography.Title>
																	<div
																		style={{
																			minHeight: 80,
																			width: "100%",
																			borderBottom: "solid 1px #ddd",
																			marginBottom: 5,
																		}}
																	>
																		<Typography.Paragraph ellipsis={{ rows: 2, tooltip: item.Description }}>
																			{item.Description}
																		</Typography.Paragraph>
																	</div>
																</Link>
																<Flex
																	gap={10}
																	style={{ width: "100%", borderBottom: "solid 1px #ddd" }}
																	justify="start"
																	align="flex-start"
																>
																	<Typography.Paragraph ellipsis={{ rows: 1, tooltip: subject }}>
																		{subject}
																	</Typography.Paragraph>
																	<Divider
																		type="vertical"
																		style={{
																			height: 20,
																			margin: "0 5px",
																		}}
																	/>
																	<Typography.Paragraph ellipsis={{ rows: 1, tooltip: levels }}>
																		{levels}
																	</Typography.Paragraph>
																</Flex>
																<Flex
																	gap={10}
																	style={{ width: "100%", marginTop: 10, borderBottom: "solid 1px #ddd" }}
																	justify="start"
																	align="flex-start"
																>
																	<Space>
																		<span>Registration Code:</span>
																		<span>{item?.RegistrationCode || ""}</span>
																	</Space>
																</Flex>
																<Flex
																	gap={10}
																	style={{ width: "100%", marginTop: 10 }}
																	justify="start"
																	align="flex-start"
																>
																	<Space>
																		<Avatar icon={<UserOutlined style={{ height: 25 }} />} size={32} />
																		<Space>
																			<span> Students:</span>
																			<span>{item?.Students?.items?.length || 0}</span>
																		</Space>
																	</Space>
																</Flex>
																<Flex
																	gap={10}
																	style={{ width: "100%", marginTop: 10 }}
																	justify="start"
																	align="flex-start"
																>
																	<Space>
																		<Avatar icon={<CustomerServiceOutlined style={{ height: 25 }} />} size={32} />
																		<Space>
																			<span> Assignments:</span>
																			<span>{item?.Assignments?.items?.length || 0}</span>
																		</Space>
																	</Space>
																</Flex>
															</Flex>
														</Card>
													</Badge.Ribbon>
												</Col>
											);
										})
									) : (
										<Col span={24}>
											<Badge.Ribbon text="No Class Found" placement="start">
												<Card>
													<Empty
														description={
															<Typography.Text>
																No class found. Please click on{" "}
																<strong>
																	{" "}
																	<a href="#" onClick={() => setShowAddClassModal(true)}>
																		Add Class
																	</a>{" "}
																</strong>{" "}
																button to add new class.
															</Typography.Text>
														}
													/>
												</Card>
											</Badge.Ribbon>
										</Col>
									)
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
				<Drawer
					title="Add Class"
					placement="right"
					closable={false}
					open={showAddClassModal}
					width={window.innerWidth - 250}
				>
					<Row gutter={[16, 16]} justify="start" align="middle">
						<Col span={12}>
							<Flex vertical justify="center" align="center" style={{ height: "100%" }}>
								<Typography.Title level={2} style={{ margin: 0, fontWeight: "lighter" }} className="subtitle">
									You're just one step away from creating your class
								</Typography.Title>
								<img src={classRoom} alt="class-room" height={400} />
								<Typography.Text>
									Please fill the below form to create your class. Once you create your class, you will be provided with
									a registration code. You can share this code with your students to join your class.
								</Typography.Text>
							</Flex>
						</Col>
						<Col span={2}>
							<Divider dashed orientation="center" type="vertical" style={{ height: "100%" }} />
						</Col>
						<Col span={10}>
							<Form
								form={form}
								size="large"
								layout="vertical"
								onFinish={selectedClass ? updateClass : addClass}
								onFinishFailed={onFinishFailed}
							>
								<Form.Item
									label="Class Room Name"
									name="Name"
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
									label="Class Room Description"
									name="Description"
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
									<Select
										onChange={(value) => setSelectedSubject(value)}
										options={teacher.subjects.data.map((subject) => ({
											label: subject.Name,
											value: subject.id,
										}))}
									/>
								</Form.Item>
								<Form.Item
									label="Level"
									name="level"
									rules={[
										{
											required: true,
											message: "Please generate  registration code!",
										},
									]}
								>
									<Select
										onChange={(value) => setSelectedLevel(value)}
										options={
											selectedSubject
												? teacher.subjects.data
														.find((subject) => subject.id === selectedSubject)
														?.Levels.items.map((level) => ({
															label: level.Name,
															value: level.id,
														}))
												: []
										}
									/>
								</Form.Item>
								{
									selectedClass ? (
										<Form.Item
											label="Class Room Status"
											name="IsActive"
											rules={[
												{
													required: true,
													message: "Please change the status!",
												},
											]}
										>
											<Switch
												checkedChildren="Active"
												unCheckedChildren="Inactive"
												defaultChecked={selectedClass.IsActive}
											/>
										</Form.Item>
									) : null // <Form.Item
								}
								<Divider />
								<Form.Item
									label="Registration Code"
									name="RegistrationCode"
									rules={[
										{
											required: true,
											message: "Please input your password!",
										},
									]}
									help={
										<a
											href="#"
											onClick={() => {
												let generateRegistrationCode = teachersAPI.generateRegistrationCodeAPI(6).toUpperCase();
												form.setFieldsValue({ RegistrationCode: generateRegistrationCode });
											}}
										>
											Generate Registration Code
										</a>
									}
								>
									<Input />
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
										onClick={() => resetClassHandler()}
									>
										Cancel
									</Button>
								</Form.Item>
							</Form>
						</Col>
					</Row>
				</Drawer>
				{/* Add Class Modal */}
			</div>
		</section>
	);
};

export default TeachersManageClass;
