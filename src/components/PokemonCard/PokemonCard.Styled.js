import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5d5d5d;
  width: 100%;
  min-height: 100%;

  .card {
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    grid-template-columns: repeat(3, 1fr);
    row-gap: -10px;
    background-color: #5d5d5d;
    justify-content: space-around;
    justify-items: center;
    min-height: auto;
  }

  .detailsWord {
    position: absolute;
    width: 400px;
    height: 72px;
    left: 40px;
    top: 180px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 350;
    font-size: 30px;
    line-height: 72px;
    color: #ffffff;
  }
`;

export const DivCard = styled.div`
  display: flex;
  width: 28.5vw;
  height: 29vh;
  border-radius: 2rem;
  margin-top: 6rem;
`;

export const DivId = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 16px;
  row-gap: 8px;

  p {
    display: flex;
  }

  h1 {
    width: 11.7vw;
    height: 5.4vh;
    left: 23px;
    top: 40px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
  }

  .id {
    width: 2.08vw;
    height: 2.63vh;
    left: 23px;
    top: 23px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }

  .details {
    width: 4.8vw;
    height: 3.32vh;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #ffffff;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const DivImage = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 12.56vw;
  height: 26.73vh;
  row-gap: 32px;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 10px;
    width: 9.5vw;
    height: 5.26vh;
    background: #ffffff;
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  width: 192.4vw;
  height: 43.16vh;
`;

export const DivContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -50px;
  margin-left: 120px;
  align-items: center;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -25px;
  align-items: center;

  .add {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 26.56px;
    width: 10vw;
    height: 4.055vh;
    background: #ffffff;
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 0;
    color: #0f0f0f;
  }

  .remove {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 26.56px;
    width: 10vw;
    height: 4.055vh;
    background: #ff6262;
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 0;
    color: #ffffff;
  }
`;
