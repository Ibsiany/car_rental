import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import {
  Container,
  ContainerInfo,
  ContainerTitle,
  Title,
  Info,
  ContainerCars,
  ContainerCar,
  ContainerImage,
  Image,
  ContainerText,
  ContainerCarInfo,
  Details,
} from './styles';
import logo from '../../assets/logo.png';
import { ICarDTO } from '../../interfaces/ICarDTO';
import { IUserDTO } from '../../interfaces/IUserDTO';

export function ViewCars() {
  const [cars, setCars] = useState<ICarDTO[]>([]);

  const location = useLocation();
  const user = location.state as IUserDTO;

  useEffect(() => {
    api.get(`/carro/alugados/${user.id}`).then(response => {
      setCars(response.data);
    });
  }, [user]);

  return (
    <Container>
      <Header />
      <ContainerInfo>
        <ContainerTitle>
          <Title>Carros alugados do usuário {user.nome}</Title>
          <Info>{user.email}</Info>
        </ContainerTitle>

        <ContainerCars>
          {cars.map(car => {
            return (
              <ContainerCar key={car.id}>
                <Title>{car.nome}</Title>
                <ContainerCarInfo>
                  <ContainerImage>
                    <Image src={logo} alt="logo" />
                  </ContainerImage>
                  <ContainerText>
                    <Details>{car.modelo}</Details>
                    <Details>{car.combustivel}</Details>
                    <Details>{car.motor}</Details>
                    <Details>{car.potencia}</Details>
                    <Details className="last">{car.valorDia}</Details>
                  </ContainerText>
                </ContainerCarInfo>
              </ContainerCar>
            );
          })}
        </ContainerCars>
      </ContainerInfo>
      <Footer />
    </Container>
  );
}
