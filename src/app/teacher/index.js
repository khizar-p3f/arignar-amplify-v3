import React, { useState, useCallback, useEffect } from "react";
import { Breadcrumb, ConfigProvider, Layout, theme } from "antd";

import { teachersAPI } from "./api";

import { useDispatch, useSelector } from "react-redux";
import { updateSubjectsReducer } from "../../store/reducers/teacher";
import ArignarTeacherSider from "./layout/sidebar";
import "./index.less";
import ArignarTeacherHeader from "./layout/header";
import { Router } from "@gatsbyjs/reach-router";
import TeacherDashboard from "./pages";

const { Header, Content, Footer } = Layout;

const ArignarTeacherMainPage = (props) => {
	const dispatch = useDispatch();
	const teacher = useSelector((state) => state.teacher);
	const { subjects } = teacher;
	const [subjectLoaded, setSubjectLoaded] = useState(false);
	const { token } = theme.useToken();
	useEffect(() => {
		if (!subjects.isLoaded) {
			teachersAPI.listAllSubjectsAPI().then((response) => {
				dispatch(updateSubjectsReducer(response?.data?.listSubjects?.items || []));
				setSubjectLoaded(true);
			});
		}
	}, [subjects.isLoaded]);
	return (
		<ConfigProvider
			theme={{
				algorithm: theme.defaultAlgorithm,
				token: {
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
					<Router>
						<TeacherDashboard path="/*" user={props.user} />
					</Router>
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
