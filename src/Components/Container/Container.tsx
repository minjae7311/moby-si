import React from "react";
import styled from "../../typed-components";

const Div = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Container: React.SFC = (props) => {
  return <Div> {props.children}</Div>;
};
