import { Router } from "@gatsbyjs/reach-router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ArignarSigninPage from "./login";
import ArignarTeacherMainPage from "./teacher";

const ArignarMainPage = () => {
	const user = useSelector((state) => state.user);
	const [isLoggedin, setIsLoggedin] = useState(false);
	useEffect(() => {
		if (user.isLoggedin) {
			setIsLoggedin(true);
		} else {
			setIsLoggedin(false);
		}
	}, [user.isLoggedin]);
	return (
		<Router basepath="/">
			{!isLoggedin ? <ArignarSigninPage path="/*" /> : <RenderRolesPage user={user} path="/*" />}
		</Router>
	);
};

const RenderRolesPage = ({ user }) => {
	const role = user?.signInUserSession?.idToken?.payload["cognito:groups"][0];

	const availablePages = {
		schoolteacher: (
			<Router basepath="/">
				<ArignarTeacherMainPage path="/*" user={user} />
			</Router>
		),
		teacher: (
			<div>
				<h1>Welcome to the Teacher Page</h1>
			</div>
		),
		student: (
			<div>
				<h1>Welcome to the Student Page</h1>
			</div>
		),
		undefined: (
			<div>
				<h1>Welcome to the Undefined Page</h1>
				<pre>{JSON.stringify(user, null, 4)}</pre>
			</div>
		),
	};
	//navigate(`/teacher`);
	const renderPage = availablePages[role] || availablePages["undefined"];
	return renderPage;
};

export default ArignarMainPage;
