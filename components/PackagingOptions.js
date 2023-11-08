import styled from "styled-components";

const MainWrapper = styled.div`
background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 10px gray;
  }
`;

const ImgWrapper = styled.div`
  max-width: 500px;
  max-height: 500px;
  img {
    padding: 10px;
    width: 300px;
    height: 250px;
  }
`;
const TitleWrapper = styled.div`
  padding: 5px;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  min-width: 200px;

  h1 {
    font-size: 1rem;
  }
`;

const ParaWrapper = styled.div`
  text-align: center;
`;
export default function PackagingOptions({ name, image, para, para2, para3 }) {
  return (
    <>
      <MainWrapper>
        <ImgWrapper>
          <img src={image} alt={name} />
        </ImgWrapper>
        <TitleWrapper>
          <h1>{name}</h1>
        </TitleWrapper>
        <ParaWrapper>
          <p>{para}</p>
          <p>{para2}</p>
          <p>{para3}</p>
        </ParaWrapper>
      </MainWrapper>
    </>
  );
}
