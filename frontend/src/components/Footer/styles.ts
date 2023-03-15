import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  height: 9rem;
  width: 100vw;
  left: 0;
  top: 0;
  right: 0;

  gap: 2rem;

  background-color: #1c1c1c;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  max-width: 4.5rem;
  max-height: 4.5rem;
  width: auto;
  height: auto;
`;

export const LogoInfo = styled.p`
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 25px;
  text-align: center;

  color: #ffffff;

  margin-top: -0.6rem;
`;

export const ContainerContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  gap: 2rem;

  margin-bottom: 1rem;
`;

export const ContactInfo = styled.p`
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 25px;
  text-align: center;

  color: #ffffff;
`;
