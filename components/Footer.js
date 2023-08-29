import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: white;
  padding: 0.2vh;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>This is footer</p>
    </StyledFooter>
  );
}
