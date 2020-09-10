import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_DRIVER_LIST } from "./mutation.gql";
import { useHistory } from "react-router-dom";
import { Container } from "../../Components/Container/Container";
import LoadingForm from "../../Components/LoadingForm";
import { Table, Thead, Tr, Th, Tbody, Td } from "../../Components/Table/Table";
import { goDetail } from "../../Functions/functions";

const DriverList: React.SFC = () => {
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [take, setTake] = useState(10);

  const [drivers, setDrivers] = useState();

  const [driverCols, setDriverCols] = useState();

  const { loading, data } = useQuery(GET_DRIVER_LIST, {
    variables: { page, take },
    onCompleted: () => {
      setDrivers(data.GetDriverList.drivers);

      if (data.GetDriverList.drivers.length > 0) {
        setDriverCols(
          Object.keys(data.GetDriverList.drivers[0]).map((col) => {
            if (col !== "__typename" && col !== "updatedAt") return col;
            else return null;
          })
        );
      }
    },
  });

  const history = useHistory();

  return (
    <Container>
      {loading ? (
        <LoadingForm />
      ) : (
        data &&
        drivers && (
          <Table>
            <Thead>
              <Tr>
                {driverCols.map((col, index) => {
                  if (col !== "__typename" && col !== "updatedAt")
                    return <Th key={index}>{col}</Th>;
                  else return null;
                })}
              </Tr>
            </Thead>
            <Tbody>
              {drivers.map((driver) => (
                <Tr
                  id={driver.id}
                  key={driver.id}
                  onClick={() => goDetail(history, "driver", driver.id)}
                >
                  {driverCols.map((key, index) => {
                    return <Td key={index}>{driver[key]}</Td>;
                  })}
                </Tr>
              ))}
            </Tbody>
          </Table>
        )
      )}
    </Container>
  );
};

export default DriverList;
