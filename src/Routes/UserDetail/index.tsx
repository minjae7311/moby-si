import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { GET_USER_DETAIL, UPDATE_USER_DATA } from "./mutation.gql";
import { useQuery, useMutation } from "@apollo/client";
import styled from "../../typed-components";
import LoadingForm from "../../Components/LoadingForm";
import {
  updateUserData_UpdateUserData,
  updateUserDataVariables,
} from "../../types/api";

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

const Button = styled.button`
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const UserDetail: React.SFC = () => {
  // get param
  const { id } = useParams();

  // states
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState();

  // get user data
  const { loading, data } = useQuery(GET_USER_DETAIL, {
    variables: { id: Number(id) },
    onCompleted: () => {
      setUserData(data.GetUserDetail.user);
    },
  });

  // update user data
  const [updateUserData, { error }] = useMutation<
    updateUserData_UpdateUserData,
    updateUserDataVariables
  >(UPDATE_USER_DATA, {
    variables: { data: userData },
    onError: () => console.error(error),
  });

  // history
  const history = useHistory();

  // edit user data
  const editUser = () => {
    setIsEditing(true);
  };

  const confirmEdit = async () => {
    const result = await updateUserData();

    /**
     * @todo how to get result.ok
     */
    console.log(result);

    setIsEditing(false);
  };

  // go to list page
  const goBack = () => {
    history.goBack();
  };

  /**
   * @todo delete user
   */
  // delete user
  const deleteUser = () => {};

  // user data value change handler
  const onChange = (event, header) => {
    setUserData({ ...userData, [header]: event.target.value });
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

  return (
    <Container>
      {loading ? (
        <LoadingForm />
      ) : (
        data &&
        userData && (
          <Wrapper>
            <H4>기본 정보</H4>
            <Ul>
              {/* base infos */}
              {headerList.map((header, index) => {
                return (
                  <Li key={index}>
                    <H4>{korHeader[index]}</H4>
                    <Input
                      value={userData[header] !== null ? userData[header] : ""}
                      onChange={(event) => onChange(event, header)}
                      disabled={!isEditing}
                    ></Input>
                  </Li>
                );
              })}
            </Ul>

            {/* interest */}
            <H4>주요 관심사</H4>
            <Ul>
              {userData.interests.map((interest, index) => (
                <Li key={index}>{interest.name}</Li>
              ))}
            </Ul>

            {/* credit */}
            <H4>등록 결제 수단</H4>
            <Ul>
              {userData.credit.map((credit, index) => (
                <Li key={index}>
                  {Object.keys(credit).map((key, index) => (
                    <div key={index}>
                      <H4>{key}</H4>
                      <Input
                        value={credit[key] ? credit[key] : ""}
                        onChange={() => {}}
                        disabled={true}
                      ></Input>
                    </div>
                  ))}
                </Li>
              ))}
            </Ul>

            {/* rides @todo add payment */}
            <H4>탑승 기록</H4>
            <Ul>
              {userData.rides.map((ride, index) => (
                <Li key={index}>
                  {Object.keys(ride).map((key, index) => (
                    <div key={index}>
                      <H4>{key}</H4>
                      <Input
                        value={ride[key] ? ride[key] : ""}
                        onChange={() => {}}
                        disabled={true}
                      ></Input>
                    </div>
                  ))}
                </Li>
              ))}
            </Ul>

            <Button onClick={editUser} visible={!isEditing}>
              수정하기
            </Button>
            <Button onClick={confirmEdit} visible={isEditing}>
              확인
            </Button>
            <Button onClick={goBack} visible={true}>
              뒤로가기
            </Button>
            <Button onClick={deleteUser} visible={true}>
              삭제하기
            </Button>
          </Wrapper>
        )
      )}
    </Container>
  );
};

export default UserDetail;
