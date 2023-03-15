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

  z-index: 1000;
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  gap: 3rem;

  height: 5rem;
  width: 100vw;
  left: 0;
  top: 0;
  right: 0;

  background-color: #1c1c1c;
`;

export const TitleInfoContainer = styled.div``;

export const Contact = styled.span`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #ff4d00;
`;

export const ContactInfo = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #ffffff;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  height: 4rem;
  width: 100vw;
  left: 0;
  top: 0;
  right: 0;

  background-color: #f7f7f7;

  a {
    text-decoration: none;
  }
`;

export const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70%;

  height: 4rem;

  gap: 2rem;

  a {
    font-size: 1rem;
    font-weight: bold;
    color: #6c6c6c;

    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  height: 4rem;
`;

export const Image = styled.img`
  max-width: 6rem;
  max-height: 6rem;
  width: auto;
  height: auto;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #000000;

  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
