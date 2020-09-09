import React from "react";
import { useParams } from "react-router-dom";
import { GET_USER_DETAIL } from "./mutation.gql";
import { useQuery } from "@apollo/client";
import styled from "../../typed-components";
import LoadingForm from "../../Components/LoadingForm";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li``;

const Input = styled.input`
  width: 100%;
  border: 0;
  disabled: ${(props) => (props.disabled ? true : false)};
`;

const H4 = styled.h4``;

const UserDetail: React.SFC = () => {
  // get param
  const { id } = useParams();

  const { loading, data } = useQuery(GET_USER_DETAIL, {
    variables: { id: Number(id) },
  });

  const headerList = [
    "id",
    "bankAccount",
    "fullName",
    "profilePhotoUrl",
    "phoneNumber",
    "verifiedPhoneNumber",
    "gender",
    "pushToken",
    "birthDate",
    "job",
    "deviceId",
    "isRiding",
    "createdAt",
  ];

  const korHeader = [
    "ID",
    "계좌번호",
    "이름",
    "프로필",
    "휴대폰 번호",
    "번호 인증 여부",
    "성별",
    "알림 푸쉬 토큰",
    "생일",
    "직업",
    "휴대폰 기종",
    "현재 탑승 여부",
    "가입일F",
  ];

  console.log(data);

  return (
    <Container>
      {loading ? (
        <LoadingForm />
      ) : (
        <Ul>
          {headerList.map((header, index) => {
            return (
              <Li key={index}>
                <H4>{korHeader[index]}</H4>
                <Input
                  value={data.GetUserDetail.user[header]}
                  onChange={() => console.log("changed")}
                  disabled={true}
                ></Input>
              </Li>
            );
          })}
        </Ul>
      )}{" "}
    </Container>
  );
};

export default UserDetail;
