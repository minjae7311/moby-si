import React, { useState } from "react";
import { Container } from "../../Components/Container/Container";
import { useParams } from "react-router-dom";

const DriverDetail: React.SFC = () => {
  const { id } = useParams();
  const [driverData, setDriverData] = useState();

  return <Container>hi</Container>;
};

export default DriverDetail;
