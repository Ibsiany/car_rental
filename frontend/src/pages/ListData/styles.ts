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
  height: 100%;

  margin: 0.75rem;
  padding: 0.5rem;

  border: 1px solid #000000;

  gap: 0.75rem;

  display: flex;
  flex-direction: column;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  caption {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .Title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 16px;
  }
`;

export const ScreenSelector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const ButtonSelect = styled.button`
  background-color: transparent;
  border: none;
  color: #444;
  cursor: pointer;
  font-size: 1.125rem;
  margin: 0 1rem;
  padding: 0.5rem 0.75rem;

  &.active {
    color: #007bff;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  a {
    text-decoration: none;
    color: #000000;

    padding: 3.5px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  button:nth-child(1) {
    background-color: #4caf50;
  }

  button:nth-child(2) {
    margin-left: 8px;
    background-color: #d11507;
  }

  button:nth-child(3) {
    margin-left: 8px;
    background-color: blue;
  }
`;

export const Button = styled.button`
  padding: 3.5px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
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

export const TextSwitch = styled.span`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  margin-right: 0.625rem;

  color: #05233e;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;

  a {
    border: none;
    background: transparent;

    font-family: Poppins, sans-serif;
    font-size: 0.813rem;

    padding-top: 0.25rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    padding-bottom: 0.25rem;

    color: #05233e;
    border: 1px solid #7d93a6;

    &:hover {
      opacity: 0.8;
    }
  }
`;
