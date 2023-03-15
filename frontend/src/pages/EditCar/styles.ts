import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  margin: auto;
  font-family: 'Poppins', sans-serif;

  overflow-x: hidden;
`;

export const ContainerInfo = styled.div`
  width: 50vw;

  margin: 0.75rem;
  padding: 0.5rem;

  border: 1px solid #000000;

  gap: 2rem;

  display: flex;
  flex-direction: column;
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

export const ContainerCars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;
`;

export const ContainerCar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  background: #f7f7f7;
  box-shadow: 4px 4px 4px #ff4d00;
`;

export const ContainerCarInfo = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;
`;

export const ContainerText = styled.div`
  .last {
    margin-bottom: 0.5rem;
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

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-left: 1rem;
  flex-direction: column;

  gap: 2rem;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 38.5rem;
  font-family: 'Merriweather', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;

  color: #000000;
`;

export const Input = styled.input`
  width: 30rem;
  padding: 0.2rem;

  ::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 8rem;
  height: 2.5rem;

  margin-top: 0.5rem;

  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.938rem;
  line-height: 1.125rem;

  border: 1px solid #000000;

  background-color: transparent;

  color: #000000;
`;
