import * as React from "react";

import Header from "../../Components/Header/Header";
import Layout from "../../Components/Header/Layout";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";

export const SIForm: React.SFC = (props) => {
	const history = useHistory();

	return (
		<div>
			<Header></Header>
			<Layout>
				{props.children ? (
					props.children
				) : (
					<div style={{ display: "flex" }}>
						<Card style={{ width: "20rem" }}>
							<Card.Body>
								<Card.Title>새로운 유저 등록</Card.Title>
								<Card.Link onClick={() => history.push("addNewUser")} style={{ cursor: "pointer" }}>
									유저 등록하기
								</Card.Link>
							</Card.Body>
						</Card>

						<Card style={{ width: "20rem" }}>
							<Card.Body>
								<Card.Title>새로운 드라이버 등록</Card.Title>
								<Card.Link onClick={() => history.push("addNewDriver")} style={{ cursor: "pointer" }}>
									드라이버 등록하기
								</Card.Link>
							</Card.Body>
						</Card>

						<Card style={{ width: "20rem" }}>
							<Card.Body>
								<Card.Title>새로운 관심사 등록</Card.Title>
								<Card.Link onClick={() => history.push("addNewInterest")} style={{ cursor: "pointer" }}>
									관심사 등록하기
								</Card.Link>
							</Card.Body>
						</Card>

						<Card style={{ width: "20rem" }}>
							<Card.Body>
								<Card.Title>새로운 쿠폰 등록</Card.Title>
								<Card.Link onClick={() => history.push("addNewCoupon")} style={{ cursor: "pointer" }}>
									쿠폰 등록하기
								</Card.Link>
							</Card.Body>
						</Card>
					</div>
				)}
			</Layout>
		</div>
	);
};
