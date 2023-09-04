import styled from "styled-components";

const Select = styled.select`
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid #bbb;
  border-radius: 5px;
  box-sizing: border-box;
`;

export default function (props) {
  return <Select {...props} />;
}
