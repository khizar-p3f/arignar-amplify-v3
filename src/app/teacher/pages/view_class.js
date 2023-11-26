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
	List,
	Modal,
	Row,
	Select,
	Space,
	Spin,
	Steps,
	Switch,
	Table,
	Typography,
} from "antd";
import "./view_class.less";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNameById, teachersAPI } from "../api";
import { updateClassReducer } from "../../../store/reducers/teacher";
import { useState } from "react";
import PageHeader from "../components/page-header";
import { UserAddOutlined, PlusOutlined, TableOutlined, DatabaseOutlined } from "@ant-design/icons";
import teacherImg from "../../assets/images/teacher.png";
import assignmentsImg from "../../assets/images/assignment.png";
import { Link } from "@gatsbyjs/reach-router";
import _ from "lodash";
const TeacherViewClass = (props) => {
	const dispatch = useDispatch();
	const { id } = props;
	const teacher = useSelector((state) => state.teacher);

	const { classes, subjects } = teacher;
	const [classLoaded, setClassLoaded] = useState(false);
	const [classData, setClassData] = useState({});
	const [activeTab, setActiveTab] = useState("students");

	// to get all the classes
	useEffect(() => {
		if (classes.isLoaded) {
			const findClass = classes.data.find((item) => item.id === id);
			setClassData(findClass);
			setClassLoaded(true);
		}
	}, [classes.isLoaded]);

	const tabList = [
		{
			key: "students",
			tab: (
				<span>
					<UserAddOutlined />
					Students
					<Badge
						style={{
							marginLeft: "5px",
						}}
						count={classData?.Students?.items?.length}
					/>
				</span>
			),
		},
		{
			key: "asssignments",
			tab: (
				<span>
					<DatabaseOutlined />
					Assignments
					<Badge
						style={{
							marginLeft: "5px",
						}}
						count={classData?.Assignments?.items?.length || 0}
					/>
				</span>
			),
		},
	];
	const contentList = {
		students: <StudentTabView Students={classData?.Students} subjects={subjects} />,
		asssignments: <AssignmentsTabView Assignments={classData?.Assignments} subjects={subjects} classData={classData} />,
	};

	const onTabChange = (key, type) => {
		setActiveTab(key);
	};

	return (
		<section className="view-class">
			{classLoaded ? (
				<div>
					<PageHeader
						BreadcrumbItems={[
							{
								title: "Home",
							},
							{
								title: <Link to="/">Teacher</Link>,
							},
							{
								title: <Link to="/manage_class">Manage Class</Link>,
							},
							{
								title: classData?.Name,
							},
						]}
						header={classData?.Name}
						descriptions={classData?.Description}
					/>

					<div className="view-class-container">
						{classLoaded ? (
							<section className="view-class-content">
								<Row gutter={[16, 16]} justify="start" align="top">
									<Col span={18}>
										<Card
											className="primary-card"
											tabList={tabList}
											activeTabKey={activeTab}
											onTabChange={(key) => {
												onTabChange(key, "key");
											}}
											bodyStyle={{ minHeight: "80vh" }}
										>
											{contentList[activeTab]}
										</Card>
									</Col>
									<Col span={6}>
										<Card
											className="details-card"
											title="Class Room Details"
											bordered
											cover={<img alt="example" src={teacherImg} />}
											bodyStyle={{ minHeight: "80vh" }}
										>
											<Steps
												progressDot
												status={classData?.IsActive ? "finish" : "error"}
												direction="vertical"
												items={[
													{
														title: "Subject",
														status: "finish",
														description: subjects.data.find((item) => item.id === classData?.SubjectID).Name,
													},
													{
														title: " Level",
														status: "finish",
														description: subjects.data
															.find((subject) => subject.id === classData.SubjectID)
															.Levels.items.find((level) => level.id === classData.LevelID)?.Name,
													},
													{
														title: "Registration Code",
														status: "finish",
														description: classData?.RegistrationCode,
													},
													{
														title: "Class Room Status",
														status: classData?.IsActive ? "finish" : "error",
														description: (
															<Badge
																status={classData?.IsActive ? "success" : "error"}
																text={classData?.IsActive ? "Active" : "Inactive"}
																title={classData?.IsActive ? "Active" : "Inactive"}
															/>
														),
													},
												]}
											/>
										</Card>
									</Col>
								</Row>
								<Row gutter={[16, 16]} justify="start" align="middle">
									<Col span={24}>
										<h1>Welcome to view class : {id}</h1>
										<pre>
											{JSON.stringify(
												{
													classData,
												},
												null,
												4
											)}
										</pre>
									</Col>
								</Row>
							</section>
						) : (
							<Spin />
						)}
					</div>
				</div>
			) : (
				<Empty />
			)}
		</section>
	);
};

export default TeacherViewClass;

const StudentTabView = ({ Students, subjects }) => {
	return (
		<Row gutter={[16, 16]} justify="start" align="top">
			{Students?.items?.length > 0 ? (
				Students?.items.map((student) => (
					<Col span={6} key={student.id}>
						<Card
							bordered
							title={
								<Space size={10}>
									<Avatar icon={<UserAddOutlined />} size={30} />
									<Typography.Title level={5}>{student?.Name}</Typography.Title>
								</Space>
							}
						>
							<Row gutter={[16, 16]} justify="start" align="middle">
								<Col span={24}>
									<Space direction="vertical" size={0}>
										<Typography.Text strong>Subject</Typography.Text>
										<Typography.Text>
											{subjects.data.find((item) => item.id === student.SubjectID).Name}
										</Typography.Text>
									</Space>

									<Space direction="vertical" size={0}>
										<Typography.Text strong>Level</Typography.Text>
										<Typography.Text>
											{
												subjects.data
													.find((item) => item.id === student.SubjectID)
													.Levels.items.find((level) => level.id === student.LevelID)?.Name
											}
										</Typography.Text>
									</Space>
								</Col>
							</Row>
						</Card>
					</Col>
				))
			) : (
				<Flex
					justify="center"
					align="middle"
					style={{
						width: "100%",
					}}
				>
					<Empty
						description={
							<Space direction="vertical" size={20}>
								<Typography.Title level={3} className="subtitle">
									No Students found in this class.
								</Typography.Title>
								<Button type="primary">Add Students</Button>
							</Space>
						}
					/>
				</Flex>
			)}
		</Row>
	);
};

const AssignmentsTabView = ({ Assignments, subjects, classData }) => {
	const dispatch = useDispatch();
	const [showCreateAssignment, setShowCreateAssignment] = useState(false);
	const [selectedChapter, setSelectedChapter] = useState(null);
	const [selectedQuestions, setSelectedQuestions] = useState([]);
	const [form] = Form.useForm();

	const createAssignmentHandler = (values) => {
		const createAssignmentData = {
			Name: values.Name,
			Description: values.Description,
			Questions: selectedQuestions,
			SubjectID: classData.SubjectID,
			LevelID: classData.LevelID,
			classesAssignmentsId: classData.id,
		};
		Modal.confirm({
			title: "Create Assignment",
			content: "Are you sure you want to create this assignment?",
			onOk: () => {
				teachersAPI
					.createAssignmentAPI(createAssignmentData)
					.then((res) => {
						console.log({ res });
						if (res.data?.createAssignments) {
							dispatch(
								updateClassReducer({
									isLoaded: false,
									data: [],
								})
							);
							Modal.success({
								title: "Assignment Created Successfully",
								content: "Assignment Created Successfully",
								onOk: () => {
									resetAssignmentHandler();
								},
							});
						}
					})
					.catch((err) => {
						console.log({ err });
						Modal.error({
							title: "Error in creating Assignment",
							content: "Error in creating Assignment",
							onOk: () => {
								resetAssignmentHandler();
							},
						});
					});
			},
			onCancel: () => {
				resetAssignmentHandler();
			},
		});
	};
	const resetAssignmentHandler = () => {
		form.resetFields();
		setSelectedChapter(null);
		setSelectedQuestions([]);
		setShowCreateAssignment(false);
	};
	console.log({
		subjects: subjects?.data,
	});
	return (
		<Row gutter={[16, 16]} justify="start" align="top">
			<Col span={24}>
				<Row gutter={[16, 16]} justify="end" align="middle">
					<Col flex={0}>
						<Button icon={<PlusOutlined />} onClick={() => setShowCreateAssignment(true)}>
							Add Assignment
						</Button>
					</Col>
				</Row>
			</Col>
			{Assignments?.items?.length > 0 ? (
				<Col span={24}>
					<List
						dataSource={Assignments?.items}
						itemLayout="horizontal"
						renderItem={(item) => (
							<List.Item
								actions={[
									<Button type="link" key="edit">
										Edit
									</Button>,
									<Button type="link" danger key="delete">
										Delete
									</Button>,
								]}
							>
								<List.Item.Meta title={item?.Name} description={item?.Description} />
								<List.Item.Meta
									title="questions"
									description={
										<Space direction="vertical">
											{
												_.find(subjects?.data, (subject) => subject.id === classData?.SubjectID)
												.Levels.items.find((level) => level.id === classData?.LevelID)
												.Chapters.items.find((chapter) => chapter.id === selectedChapter)
												.Questions.items.map((question) => (
													<Select.Option key={question.id} value={question.id} label={question.LocalizedName}>
														{question.LocalizedDescription}
													</Select.Option>
												))
											}
											{item?.Questions?.map((question) => (
												
											))}
										</Space>
									}
								/>
							</List.Item>
						)}
					/>
				</Col>
			) : (
				<Flex
					justify="center"
					align="middle"
					style={{
						width: "100%",
					}}
				>
					<Empty
						description={
							<Space direction="vertical" size={20}>
								<Typography.Title level={3} className="subtitle">
									No Assignments found in this class.
								</Typography.Title>
								<Button type="primary" onClick={() => setShowCreateAssignment(true)}>
									Add Assignements
								</Button>
							</Space>
						}
					/>
				</Flex>
			)}

			<Drawer
				title="Create Assignment"
				placement="right"
				closable={false}
				onClose={() => setShowCreateAssignment(false)}
				open={showCreateAssignment}
				width={window.innerWidth - 250}
			>
				<Row gutter={[16, 16]} justify="start" align="top">
					<Col span={8}>
						<img src={assignmentsImg} alt="assignments" width="100%" />
					</Col>
					<Col span={12}>
						<Form
							layout="vertical"
							form={form}
							onFinish={createAssignmentHandler}
							size="large"
							name="create_assignment"
						>
							<Form.Item
								label="Assignment Name"
								name="Name"
								rules={[
									{
										required: true,
										message: "Please input your Assignment Name!",
									},
								]}
							>
								<Input placeholder="Assignment Name" />
							</Form.Item>
							<Form.Item
								label="Description"
								name="Description"
								rules={[
									{
										required: true,
										message: "Please input your Assignment Description!",
									},
								]}
							>
								<Input.TextArea placeholder="Assignment Description" rows={5} />
							</Form.Item>
							<Form.Item
								label="Chapter"
								name="chapter"
								rules={[
									{
										required: true,
										message: "Please select chapter for this assignment!",
									},
								]}
							>
								<Select
									placeholder="Select Subject"
									allowClear
									onChange={(value) => {
										setSelectedChapter(value);
										form.resetFields(["questions"]);
									}}
								>
									{_.find(subjects?.data, (subject) => subject.id === classData?.SubjectID)
										.Levels.items.find((level) => level.id === classData?.LevelID)
										.Chapters.items.map((chapter) => (
											<Select.Option key={chapter.id} value={chapter.id}>
												{chapter.Name}
											</Select.Option>
										))}
								</Select>
							</Form.Item>
							<Form.Item
								label="Questions"
								name="Questions"
								rules={[
									{
										required: true,
										message: "Please select questions for this assignment!",
									},
								]}
							>
								<Select
									mode="tags"
									placeholder="Select Questions"
									allowClear
									onChange={(value) => {
										setSelectedQuestions(value);
									}}
									optionRender={(item) => (
										<Space direction="vertical">
											<Typography.Text>{item.label}</Typography.Text>
										</Space>
									)}
									fieldNames={{
										children: "Questions",
										options: "Questions",
									}}
								>
									{selectedChapter
										? _.find(subjects?.data, (subject) => subject.id === classData?.SubjectID)
												.Levels.items.find((level) => level.id === classData?.LevelID)
												.Chapters.items.find((chapter) => chapter.id === selectedChapter)
												.Questions.items.map((question) => (
													<Select.Option key={question.id} value={question.id} label={question.LocalizedName}>
														{question.LocalizedDescription}
													</Select.Option>
												))
										: null}
								</Select>
							</Form.Item>
							<Divider />
							<Row gutter={[16, 16]} justify="end" align="middle">
								<Col span={3}>
									<Space>
										<Button htmlType="submit" type="primary">
											Create
										</Button>
										<Button onClick={() => resetAssignmentHandler()}>Cancel</Button>
									</Space>
								</Col>
							</Row>
						</Form>
					</Col>
				</Row>
			</Drawer>
		</Row>
	);
};
