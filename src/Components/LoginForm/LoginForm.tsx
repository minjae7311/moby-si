import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { adminLogin_AdminLogin, adminLoginVariables } from "../../types/api";
import { ADMIN_LOGIN } from "../../Routes/Login/mutation.gql";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface loginFormInterface {
	onComplete: any;
	onError: any;
}

const LoginForm: React.SFC<loginFormInterface> = ({ onComplete, onError }) => {
	const [loginId, setLoginId] = useState("");
	const [loginPw, setLoginPw] = useState("");
	const [adminLogin] = useMutation<adminLogin_AdminLogin, adminLoginVariables>(ADMIN_LOGIN, {
		variables: { loginId, loginPw },
		onCompleted: onComplete,
		onError: onError,
	});

	return (
		<Form
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				width: "50vw",
				height: "70vh",
				margin: "0 auto",
			}}
			onSubmit={async (event) => {
				event.preventDefault();

				await adminLogin({
					variables: { loginId, loginPw },
				});
			}}>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>아이디</Form.Label>
				<Form.Control type="text" placeholder="ID" onChange={(e) => setLoginId(e.target.value)} />
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>비밀번호</Form.Label>
				<Form.Control type="password" placeholder="Password" onChange={(e) => setLoginPw(e.target.value)} />
			</Form.Group>
			<Button variant="primary" type="submit">
				로그인
			</Button>
		</Form>
	);
};

export default LoginForm;
