import styled from "../../typed-components";

export const Ul = styled.ul`
  list-style: none;
`;

export const Li = styled.li``;

export const Input = styled.input`
  width: 70%;
  border: ${(props) => (props.disabled ? "0" : "1px solid gray")};
  disabled: ${(props) => (props.disabled ? true : false)};
`;

export const H4 = styled.h4``;

export const Button = styled.button`
  display: ${(props) => (props.visible ? "block" : "none")};
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: ${(props) => (props.disabled ? "0" : "1px solid gray")};
  disabled: ${(props) => (props.disabled ? true : false)};
`;
