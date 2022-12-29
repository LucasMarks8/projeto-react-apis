import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 20vh;
  border: 3px solid red;
  align-items: center;
  width: 100vw;

  Button {
    flex-grow: 1;
    margin-left: 0 auto;
    border: 3px solid black;
  }

  .backToHomePage {
    flex-grow: 1;
    position: absolute;
    width: 210px;
    height: 36px;
    left: 100px;
    top: 62px;
    border: 1px solid black;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    text-decoration-line: underline;

    color: #1a1a1a;
  }

  .titulo {
    flex-grow: 1;
    position: absolute;
    width: 307px;
    height: 113px;
    left: 566px;
    top: 21px;
    border: 3px solid yellow;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;
export default HeaderContainer;

export const DivButtonLeft = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  height: 100%;

  p{
    border: 1px solid black;
  }

  img{
    border: 1px solid black;
  }
`;
export const DivButtonRight = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  height: 100%;
`;
export const DivTitle = styled.div`
width: 30rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  height: 100%;
`;
export const DivHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid blue;
  width: 100%;
  height: 100%;
`;
