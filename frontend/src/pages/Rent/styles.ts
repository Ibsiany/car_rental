import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  margin: auto;
  font-family: 'Poppins', sans-serif;
`;

export const ContainerInfo = styled.div`
  width: 70vw;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;

  height: 8.75rem;
`;

export const Title = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  display: flex;
  align-items: center;

  color: #000000;
`;

export const Info = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;

  color: #ff4d00;
`;

export const ContainerCars = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  /* display: flex;
  flex-flow: row wrap; */
  /* align-items: start;
  justify-content: space-between; */
`;

export const ContainerCar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  /* width: 50%; */
`;

export const ContainerCarInfo = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;

  padding: 0.5rem;
  background: #f7f7f7;
  box-shadow: 4px 4px 4px #ff4d00;
`;

export const ContainerText = styled.div`
  .last {
    margin-bottom: 0.5rem;
  }

  a {
    width: 5.375rem;
    height: 1.5rem;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 0.938rem;
    line-height: 1.125rem;

    border: 1px solid #000000;

    background-color: transparent;

    color: #000000;

    padding: 0.25rem;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30%;

  height: 4rem;
`;

export const Image = styled.img`
  max-width: 12rem;
  max-height: 12rem;
  width: auto;
  height: auto;
`;

export const Details = styled.span`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  display: flex;
  align-items: center;

  color: #333333;
`;
