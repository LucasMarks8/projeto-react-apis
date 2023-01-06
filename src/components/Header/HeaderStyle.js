import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 20vh;
  align-items: center;
  width: 100vw;

  Button {
    flex-grow: 1;
    margin-left: 0 auto;
  }

  .backToHomePage {
    flex-grow: 1;
    position: absolute;
    width: 210px;
    height: 36px;
    left: 100px;
    top: 62px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
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
  }
`;

export const DivButtonLeft = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const DivButtonRight = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const DivTitle = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const DivHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
