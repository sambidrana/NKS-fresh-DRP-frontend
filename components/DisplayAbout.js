import styled from "styled-components";

const DisplayContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: #eee;
  border: 1px solid black; //
  display: flex;
  flex-direction: column;
  align-items: center;


  img {
    max-width: 80%;
    padding: 20px;
  }
  h4 {
    margin: 0;
  }
  p {
    padding: 10px;
  }
`;

export default function DisplayAbout({ children }) {
  return (
    <>
      <DisplayContainer>{children}</DisplayContainer>
    </>
  );
}
