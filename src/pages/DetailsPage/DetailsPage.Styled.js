import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 110vh;
    align-items: center;
    background-color: #5d5d5d;

    .detailsWord {
    position: absolute;
    width: 220px;
    height: 72px;
    left: 80px;
    top: 180px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 350;
    font-size: 30px;
    line-height: 72px;
    color: #ffffff;
  }
`;

// export const Details = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   align-items: center;
//   background-color: blue;

//   /* row-gap: 3.5rem;
 
//   width: 100%;
//   background-color: #5d5d5d;
//   display: flex;
//   justify-content: center;
//   border: 4px solid black; */

 
// `;

export const DivDetails = styled.div`
  position: absolute;
  width: 1389.14px;
  height: 663px;
  border-radius: 37.8857px;
  margin-top: 6rem;
  
`;

export const ImageFront = styled.div`
  position: absolute;
  width: 282px;
  height: 282px;
  left: 44px;
  top: 26px;
  background: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`;

export const ImageBack = styled.div`
  position: absolute;
  width: 282px;
  height: 282px;
  left: 44px;
  top: 355px;
  border: 2px solid #ffffff;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

export const ImageRightSide = styled.div`
  position: absolute;
  width: 270px;
  height: 270px;
  left: 1109px;
  top: -125px;
`;

export const StatsContainer = styled.div`
  position: absolute;
  width: 343px;
  height: 613px;
  left: 360px;
  top: 24px;
  background: #ffffff;
  border-radius: 12px;

  h1 {
    margin: 1rem;
    width: 120px;
    height: 29px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    color: #000000;
  }

  .stats {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    row-gap: 1rem;
  }

  .tittle {
    color: gray;
  }
`;
export const CardDetails = styled.div`
  position: absolute;
  width: 238px;
  height: 58px;
  left: 771px;
  top: 39px;

  h1 {
    width: 280px;
    height: 58px;
    left: 771px;
    top: 39px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #ffffff;
  }

  .id {
    width: 30px;
    height: 19px;
    left: 774px;
    top: 24px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }

  p {
    display: flex;
    gap: 1rem;
  }
`;

export const MovesContainer = styled.div`
  position: absolute;
  width: 292px;
  height: 453px;
  left: 771px;
  top: 184px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  h1 {
    margin: 1rem;
    width: 120px;
    height: 29px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    color: #000000;
  }

  p {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    row-gap: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 10px;
    width: 130px;
    height: 37px;
    left: 814px;
    top: 656px;
    background: #ececec;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: 12px;
  }
`;
