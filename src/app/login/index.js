import { Button, ConfigProvider, theme, Layout, Row, Col, Typography } from "antd";
import { Auth, Hub } from "aws-amplify";
import { Authenticator, Heading, View } from "@aws-amplify/ui-react";
import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUserReducer } from "../../store/reducers/user";
import "./index.less";
import logo from "../assets/images/logo.png";
const { useToken } = theme;

const ArignarSigninPage = () => {
	const { token } = useToken();
	const dispatch = useDispatch();

	useEffect(() => {
		checkCurrentAuthenticatedUser();
	}, []);

	const checkCurrentAuthenticatedUser = () => {
		Auth.currentAuthenticatedUser().then((user) => {
			updateLoginState(user);
		});
	};

	const updateLoginState = (user) => {
		dispatch(updateUserReducer(user));
	};

	Hub.listen("auth", (data) => {
		const event = data.payload.event;
		if (event === "signIn") {
			console.log({
				event,
				data: data.payload,
			});
			updateLoginState(data.payload.data);
		}
	});

	return (
		<ConfigProvider
			theme={{
				algorithm: theme.defaultAlgorithm,
				token: {
					fontFamily: "Open Sans",
					fontSize: "16px",
					lineHeight: "24px",
					colorPrimary: token.red10,
				},
			}}
		>
			<Layout className="login">
				<Row align="middle" justify="start" gutter={[16, 16]}>
					<Col span={24} style={{ textAlign: "center" }}>
						<img src={logo} alt="logo" />
					</Col>
					<Col span={24}>
						<Authenticator
							variation="default"
							loginMechanisms={["username", "email", "phone_number", "profile", "website"]}
						>
							{({ signOut }) => (
								<main>
									<Heading level={2}>Please wailt while we load the page . . .</Heading>
									<Button onClick={signOut} variation="primary" size="large">
										Sign out
									</Button>
								</main>
							)}
						</Authenticator>
					</Col>
				</Row>
			</Layout>
		</ConfigProvider>
	);
};

export default ArignarSigninPage;
