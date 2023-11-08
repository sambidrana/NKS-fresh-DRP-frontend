import styled, {keyframes} from "styled-components";

const zoomOutEffect = keyframes`
  /* from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  } */
  0% {
    background-size: 120% 120%;  
  }
  100% {
    background-size: 100% 110%;
  }
`;
const HeaderWrapper = styled.div`
  position: relative;
  padding: 10px;
  margin: 15px;
  height: 300px;
  font-size: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url( ${props => props.bgImg || "/images/fruit-trees.jpg"}) no-repeat center center;
    /* background-size: 100% 150%; */
    opacity: 0.7; /* Adjust this value for your desired opacity */
    z-index: -1;
    animation: ${zoomOutEffect} 1s ease-out forwards; /* Use the animation here */

  }
`;

export default function PageImgWrapper({children, bgImg}) {
    return (
        <HeaderWrapper bgImg={bgImg}>
        {children}
        </HeaderWrapper>
    )
}