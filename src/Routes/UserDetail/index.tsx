import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { GET_USER_DETAIL } from "./mutation.gql";
import { useQuery } from "@apollo/client";
import styled from "../../typed-components";
import LoadingForm from "../../Components/LoadingForm";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Wrapper = styled.div``;

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

const Button = styled.button``;

const UserDetail: React.SFC = () => {
  // get param
  const { id } = useParams();

  const [isEditing, setIsEditing] = useState(false);

  const { loading, data } = useQuery(GET_USER_DETAIL, {
    variables: { id: Number(id) },
  });

  const history = useHistory();

  const editUser = () => {
    setIsEditing(false);
  };

  const goBack = () => {
    history.goBack();
  };

  const deleteUser = () => {};

  const onChange = (e) => {
    console.log(e.target.value);
  };

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
    "가입일",
  ];

  console.log(data);

  return (
    <Container>
      {loading ? (
        <LoadingForm />
      ) : (
        <Wrapper>
          <H4>기본 정보</H4>
          <Ul>
            {/* base infos */}
            {headerList.map((header, index) => {
              return (
                <Li key={index}>
                  <H4>{korHeader[index]}</H4>
                  <Input
                    value={
                      data.GetUserDetail.user[header] !== null
                        ? data.GetUserDetail.user[header]
                        : "---- Empty ----"
                    }
                    onChange={onChange}
                    disabled={isEditing}
                  ></Input>
                </Li>
              );
            })}
          </Ul>

          {/* interest */}
          <H4>주요 관심사</H4>
          <Ul>
            {data.GetUserDetail.user.interests.map((interest, index) => (
              <Li key={index}>{interest.name}</Li>
            ))}
          </Ul>

          {/* credit */}
          <H4>등록 결제 수단</H4>
          <Ul>
            {data.GetUserDetail.user.credit.map((credit, index) => (
              <Li key={index}>
                <H4>nickname</H4>
                <Input
                  value={credit.nickname}
                  onChange={onChange}
                  disabled={true}
                ></Input>
                <H4>card_name</H4>
                <Input
                  value={credit.card_name}
                  onChange={onChange}
                  disabled={true}
                ></Input>
                <H4>card_number</H4>
                <Input
                  value={credit.card_number}
                  onChange={onChange}
                  disabled={true}
                ></Input>
                <H4>expiry</H4>
                <Input
                  value={credit.expiry}
                  onChange={onChange}
                  disabled={true}
                ></Input>
                <H4>isMain</H4>
                <Input
                  value={credit.isMain}
                  onChange={onChange}
                  disabled={true}
                ></Input>
                <H4>createdAt</H4>
                <Input
                  value={credit.createdAt}
                  onChange={onChange}
                  disabled={true}
                ></Input>
                <H4>updatedAt</H4>
                <Input
                  value={credit.updatedAt}
                  onChange={onChange}
                  disabled={true}
                ></Input>
                <H4>first4numbers</H4>
                <Input
                  value={credit.first4numbers}
                  onChange={onChange}
                  disabled={true}
                ></Input>
              </Li>
            ))}
          </Ul>

          {/* rides @todo add payment */}
          <H4>탑승 기록</H4>
          <Ul>
            {data.GetUserDetail.user.rides.map((ride, index) => (
              <Li key={index}>
                <H4>출발지</H4>
                <Input
                  value={ride.to.address}
                  onChange={onChange}
                  disabled={true}
                ></Input>

                <H4>도착지</H4>
                <Input
                  value={ride.from.address}
                  onChange={onChange}
                  disabled={true}
                ></Input>

                <H4>최종 요금</H4>
                <Input
                  value={ride.finalFee}
                  onChange={onChange}
                  disabled={true}
                ></Input>

                <H4>설문 참여 여부</H4>
                <Input
                  value={ride.surveyCompleted}
                  onChange={onChange}
                  disabled={true}
                ></Input>

                <H4>현 상태</H4>
                <Input
                  value={ride.status}
                  onChange={onChange}
                  disabled={true}
                ></Input>
              </Li>
            ))}
          </Ul>
        </Wrapper>
      )}

      {/* @todo position fixed */}
      <Button onClick={editUser}>수정하기</Button>
      <Button onClick={goBack}>뒤로가기</Button>
      <Button onClick={deleteUser}>삭제하기</Button>
    </Container>
  );
};

export default UserDetail;
