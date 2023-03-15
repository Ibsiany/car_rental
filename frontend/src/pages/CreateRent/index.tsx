import React, { useCallback, ChangeEvent, useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useLocation } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import {
  Container,
  ContainerInfo,
  Title,
  ContainerCars,
  ContainerCar,
  ContainerImage,
  Image,
  ContainerText,
  ContainerCarInfo,
  Details,
  ContainerInput,
  Label,
  Input,
  ContainerButton,
  Button,
} from './styles';
import { IRentDTO } from '../../interfaces/IRentDTO';
import { ICarDTO } from '../../interfaces/ICarDTO';
import logo from '../../assets/logo.png';
import { api } from '../../services/api';

export function CreateRent() {
  const [data, setData] = useState<IRentDTO>({} as IRentDTO);
  const [car, setCar] = useState<ICarDTO>({} as ICarDTO);

  const location = useLocation();
  const car_id = location.state;

  useEffect(() => {
    api.get(`/carro/${car_id}`).then(response => {
      setCar(response.data);
    });
  }, [car_id]);

  const rent = useCallback(async () => {
    try {
      await api.post('/car/rent', {
        data,
      });

      toast.success('Carro alugado com sucesso!');
    } catch (error) {
      toast.error('Ocorreu algum erro ao alugar o carro!');
    }
  }, [data]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setData({ ...data, [name]: value });
    },
    [data],
  );

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />

      <Header />
      <ContainerInfo>
        <ContainerCars>
          <ContainerCar>
            <Title>{car.nome}</Title>
            <ContainerCarInfo>
              <ContainerImage>
                <Image src={logo} alt="logo" />
              </ContainerImage>
              <ContainerText>
                <Details>Modelo: {car.modelo}</Details>
                <Details>Autonomia: {car.autonomia}</Details>
                <Details>Potencia: {car.potencia}</Details>
                <Details>Taxa: {car.taxa}</Details>
                <Details>Combustivel: {car.combustivel}</Details>
                <Details>Motor: {car.motor}</Details>
                <Details>Valor por dia: {car.valorDia}</Details>
                <Details>Taxa de atraso: {car.taxa}</Details>
                <Details className="last">Descrição: {car.descricao}</Details>
              </ContainerText>
            </ContainerCarInfo>
          </ContainerCar>
        </ContainerCars>

        <ContainerInput>
          <Label>
            CPF:
            <Input
              id="cpf"
              name="cpf"
              type="number"
              onChange={handleInputChange}
              placeholder="Ex: 13785091000160"
            />
          </Label>
          <Label>
            Data de devolução:
            <Input
              id="data"
              name="data"
              type="date"
              onChange={handleInputChange}
            />
          </Label>
        </ContainerInput>

        <ContainerButton>
          <Button onClick={rent}>ALUGAR</Button>
        </ContainerButton>
      </ContainerInfo>
      <Footer />
    </Container>
  );
}
