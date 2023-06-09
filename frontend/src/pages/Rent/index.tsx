import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

export function Rent() {
  const [cars, setCars] = useState<ICarDTO[]>([]);

  useEffect(() => {
    api.get(`/carro`).then(response => {
      setCars(response.data);
    });
  }, []);

  return (
    <Container>
      <Header />
      <ContainerInfo>
        <ContainerTitle>
          <Title>Aluguel de carros</Title>
          <Info>Conheça os carros disponíveis!</Info>
        </ContainerTitle>

        <ContainerCars>
          {cars.map(car => {
            return (
              car.disponibilidade && (
                <ContainerCar key={car.id}>
                  <Title>{car.nome}</Title>
                  <ContainerCarInfo>
                    <ContainerImage>
                      <Image src={logo} alt="logo" />
                    </ContainerImage>
                    <ContainerText>
                      <Details>Modelo: {car.modelo}</Details>
                      <Details>Combustivel: {car.combustivel}</Details>
                      <Details>Motor: {car.motor}</Details>
                      <Details>Potencia: {car.potencia}</Details>
                      <Details>Valor p/ dia: {car.valorDia}</Details>
                      <Details className="last">
                        Multa de atraso: {car.taxa}
                      </Details>

                      <Link to="/rent/create" id="rent-create" state={car.id}>
                        ALUGAR
                      </Link>
                    </ContainerText>
                  </ContainerCarInfo>
                </ContainerCar>
              )
            );
          })}
        </ContainerCars>
      </ContainerInfo>
      <Footer />
    </Container>
  );
}
