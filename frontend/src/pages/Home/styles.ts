import styled from 'styled-components';
import banner from '../../assets/banner.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  margin: auto;
  font-family: 'Poppins', sans-serif;
`;

export const ContainerBanner = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  align-items: end;
  justify-content: center;

  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  margin-bottom: 5.689rem;

  width: 100vw;
  height: 8.75rem;

  background: rgba(28, 28, 28, 0.76);
`;

export const Title = styled.span`
  margin-left: 2rem;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 59px;
  display: flex;
  align-items: center;

  color: #ffffff;
`;
