import React, { useEffect } from "react";
import {
	Avatar,
	Breadcrumb,
	Card,
	Cascader,
	Col,
	Divider,
	Empty,
	Flex,
	Row,
	Space,
	Spin,
	Statistic,
	Typography,
	theme,
} from "antd";
import { useState } from "react";
import "./index.less";
import { useSelector } from "react-redux";

const TeacherDashboard = () => {
	const teacher = useSelector((state) => state.teacher);
	const { subjects } = teacher;
	const [subjectLoaded, setSubjectLoaded] = useState(false);
	const { token } = theme.useToken();
	useEffect(() => {
		if (subjects.isLoaded) {
			setSubjectLoaded(true);
		}
	}, [subjects.isLoaded]);
	return (
		<section className="teacher-dashboard">
			<div className="breadcrumb-container">
				<Breadcrumb
					style={{
						margin: "16px 0",
					}}
					items={[
						{
							title: "Home",
						},
						{
							title: "Teacher",
						},
						{
							title: "Dashboard",
						},
					]}
				></Breadcrumb>
			</div>

			<div className="teacher-dashboard-container">
				<div className="statistics-container">
					<div className="statistics">
						<Row gutter={[16, 16]}>
							<Col span={6}>
								<Card
									bordered
									style={{
										backgroundColor: "#f5f5f5",
									}}
								>
									<Statistic
										title="Total Students"
										value={112893}
										precision={0}
										prefix={<i className="fas fa-user-graduate"></i>}
									/>
								</Card>
							</Col>
							<Col span={6}>
								<Card
									bordered
									style={{
										backgroundColor: "#f5f5f5",
									}}
								>
									<Statistic
										title="Total Subjects"
										value={112893}
										precision={0}
										prefix={<i className="fas fa-book"></i>}
									/>
								</Card>
							</Col>
							<Col span={6}>
								<Card
									bordered
									style={{
										backgroundColor: "#f5f5f5",
									}}
								>
									<Statistic
										title="Total Classes"
										value={112893}
										precision={0}
										prefix={<i className="fas fa-chalkboard-teacher"></i>}
									/>
								</Card>
							</Col>
							<Col span={6}>
								<Card
									bordered
									style={{
										backgroundColor: "#f5f5f5",
									}}
								>
									<Statistic
										title="Total Assignments"
										value={112893}
										precision={0}
										prefix={<i className="fas fa-file-alt"></i>}
									/>
								</Card>
							</Col>
						</Row>
					</div>
				</div>
				<Row gutter={[16, 16]} justify="space-between" align="center" style={{ margin: "30px 0" }}>
					<Col span={18}>
						<Card
							bordered
							title="Notifications"
							style={{
								minHeight: "300px",
							}}
						>
							<Empty image={Empty.PRESENTED_IMAGE_DEFAULT} description={<span>No Notifications</span>} />
						</Card>
					</Col>
					<Col span={6}>
						<Card
							bordered
							title="Recent Activities"
							style={{
								minHeight: "300px",
							}}
						>
							<Empty image={Empty.PRESENTED_IMAGE_DEFAULT} description={<span>No Recent Activities</span>} />
						</Card>
					</Col>
				</Row>
				<div className="subject-cascader">
					<RenderSubjectCascade subjects={subjects} subjectLoaded={subjectLoaded} />
				</div>
			</div>
		</section>
	);
};

export default TeacherDashboard;

const RenderSubjectCascade = ({ subjects, subjectLoaded }) => {
	return (
		<Row>
			{subjectLoaded && subjects.data.length > 0 ? (
				<Col span={24}>
					<Typography.Title level={3} className="subtitle">
						Availble Subject
					</Typography.Title>

					<Cascader.Panel
						loadingIcon={<i className="fas fa-spinner fa-spin"></i>}
						style={{
							width: "100%",
							minHeight: "500px",
							fontSize: "1.2rem",
						}}
						options={subjects.data.map((subject) => {
							return {
								value: subject.id,
								label: subject.Name,
								children: subject.Levels.items.map((level) => {
									return {
										value: level.id,
										label: level.Name,
										children: level.Chapters.items.map((chapter) => {
											return {
												value: chapter.id,
												label: chapter.Name,
												children: chapter.Questions.items.map((question) => {
													return {
														value: question.id,
														label: question.Name,
													};
												}),
											};
										}),
									};
								}),
							};
						})}
						expandTrigger="hover"
						placeholder="Select Subject"
						showSearch={{
							filter: (inputValue, path) => {
								return path.some((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));
							},
						}}
					/>
				</Col>
			) : subjectLoaded && subjects.data.length === 0 ? (
				<Col span={24}>
					<Empty image={Empty.PRESENTED_IMAGE_DEFAULT} description={<span>No Subjects</span>} />
				</Col>
			) : (
				<Col span={24}>
					<Spin style={{ margin: "0 auto", display: "block", fontSize: 50 }} size={50}></Spin>
				</Col>
			)}
		</Row>
	);
};
