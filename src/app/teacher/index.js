import React, { useState, useCallback, useEffect } from "react";
import { Breadcrumb, ConfigProvider, Layout, Spin, theme } from "antd";

import { teachersAPI } from "./api";

import { useDispatch, useSelector } from "react-redux";
import { updateClassReducer, updateSubjectsReducer } from "../../store/reducers/teacher";
import ArignarTeacherSider from "./layout/sidebar";
import "./index.less";
import ArignarTeacherHeader from "./layout/header";
import { Router } from "@gatsbyjs/reach-router";
import TeacherDashboard from "./pages";
import TeachersManageClass from "./pages/manage_class";
import TeacherViewClass from "./pages/view_class";

const { Header, Content, Footer } = Layout;

const ArignarTeacherMainPage = (props) => {
	const dispatch = useDispatch();
	const teacher = useSelector((state) => state.teacher);
	const { subjects, classes } = teacher;
	const [subjectLoaded, setSubjectLoaded] = useState(false);
	const { token } = theme.useToken();

	useEffect(() => {
		if (!subjects.isLoaded) {
			teachersAPI.listAllSubjectsAPI().then((response) => {
				dispatch(updateSubjectsReducer(response?.data?.listSubjects?.items || []));
				setSubjectLoaded(true);
			});
		}
		if (!classes.isLoaded) {
			teachersAPI.listAllClassesAPI().then((response) => {
				dispatch(
					updateClassReducer({
						isLoaded: true,
						data: response?.data?.listClasses?.items || [],
					})
				);
			});
		}
	}, [subjects.isLoaded, classes.isLoaded]);

	return (
		<ConfigProvider
			theme={{
				algorithm: theme.defaultAlgorithm,
				token: {
					colorPrimary: "#544af4",
					fontFamily: "Open Sans",
					colorText: "#1d1d1f",
				},
			}}
		>
			<Layout
				className="teacher-main-page"
				style={{
					minHeight: "100vh",
				}}
			>
				<ArignarTeacherSider />
				<Layout>
					<ArignarTeacherHeader user={props?.user} />
					{subjectLoaded ? (
						<div className="content-section">
							<Router>
								<TeacherDashboard path="/*" user={props.user} />
								<TeachersManageClass path="/manage_class" user={props.user} />
								<TeacherViewClass path="/class/:id/" user={props.user} />
							</Router>
						</div>
					) : (
						<div className="content-section">
							<Spin />
						</div>
					)}
					<Footer
						style={{
							textAlign: "center",
						}}
					>
						Arignar ©2023
					</Footer>
				</Layout>
			</Layout>
		</ConfigProvider>
	);
};
export default ArignarTeacherMainPage;
