import React, { useState } from "react";
import { Container, Wrapper } from "../../Components/Container/Container";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_DRIVER_DETAIL } from "./mutations.gql";
import LoadingForm from "../../Components/LoadingForm";
import { H4 } from "../../Components/Forms/Forms";

const DriverDetail: React.SFC = () => {
  const { id } = useParams();
  const [driverData, setDriverData] = useState();

  const { loading, data } = useQuery(GET_DRIVER_DETAIL, {
    variables: { id: Number(id) },
    onCompleted: () => {
      setDriverData(data.GetDriverDetail.driver);
    },
  });

  console.log(driverData);
  
  return (
    <Container>
      {loading ? (
        <LoadingForm />
      ) : (
        data &&
        driverData && (
          <Wrapper>
            <H4>{driverData.fullName}</H4>
          </Wrapper>
        )
      )}
    </Container>
  );
};

export default DriverDetail;
