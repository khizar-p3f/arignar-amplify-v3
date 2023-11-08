import React, { useEffect } from "react";
import { Avatar, Breadcrumb, Card, Cascader, Col, Flex, Row, Space, Statistic, Typography, theme } from "antd";
import { useState } from "react";
import "./index.less";
import { useSelector } from "react-redux";

const TeacherDashboard = () => {
	const teacher = useSelector((state) => state.teacher);
	const { subjects } = teacher;
	const [subjectLoaded, setSubjectLoaded] = useState(false);
	const { token } = theme.useToken();
	useEffect(() => {
		console.log({ subjects });
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
				<div className="subject-cascader">{subjectLoaded && <RenderSubjectCascade subjects={subjects} />}</div>
			</div>
		</section>
	);
};

export default TeacherDashboard;

const RenderSubjectCascade = ({ subjects }) => {
	console.log({ subjects });
	return (
		<div>
			<Typography.Title level={3}>
				<i className="fas fa-book"></i> Manage Subjects
			</Typography.Title>
			<Flex justify="space-between" align="center">
				<Cascader.Panel
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
			</Flex>
		</div>
	);
};
