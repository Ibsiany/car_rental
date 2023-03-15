import React, { useCallback, useState, ChangeEvent, useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Header } from '../../components/Header';
import { ICarDTO } from '../../interfaces/ICarDTO';
import { Footer } from '../../components/Footer';
import {
  Container,
  ContainerInfo,
  Title,
  ContainerInput,
  Label,
  Input,
  ContainerButton,
  Button,
} from './styles';
import { api } from '../../services/api';

export function EditCar() {
  const [car, setCar] = useState<ICarDTO>({} as ICarDTO);

  const location = useLocation();
  const car_id = location.state;

  useEffect(() => {
    api.get(`/carro/${car_id}`).then(response => {
      setCar(response.data);
    });
  }, [car_id]);

  const navigate = useNavigate();

  const editCar = useCallback(async () => {
    try {
      await api.put(`/carro/${car_id}`, {
        id: Number(car_id),
        placa: car.placa,
        modelo: car.modelo,
        descricao: car.descricao,
        combustivel: car.combustivel,
        nome: car.nome,
        motor: car.motor,
        potencia: car.potencia,
        disponibilidade: car.disponibilidade,
        autonomia: car.autonomia,
        valorDia: Number(car.valorDia),
        taxa: Number(car.taxa),
      });

      navigate('/admin/list');
    } catch (error) {
      toast.error('Ocorreu algum erro na edição do carro!');
    }
  }, [car, navigate, car_id]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setCar({ ...car, [name]: value });
    },
    [car],
  );

  const style = {
    height: '100%',
  };

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />

      <Header />
      {localStorage.getItem('status') === 'true' ? (
        <ContainerInfo>
          <Title>Realizar cadastro</Title>
          <ContainerInput>
            <Label>
              NOME:
              <Input
                id="nome"
                name="nome"
                type="text"
                defaultValue={car.nome}
                onChange={handleInputChange}
                placeholder="digite o nome"
              />
            </Label>
            <Label>
              MODELO:
              <Input
                id="modelo"
                name="modelo"
                type="text"
                defaultValue={car.modelo}
                onChange={handleInputChange}
                placeholder="Ex: 1. 1 - Gol, da Volkswagen"
              />
            </Label>
            <Label>
              PLACA:
              <Input
                id="placa"
                name="placa"
                type="text"
                defaultValue={car.placa}
                onChange={handleInputChange}
                placeholder="Ex: UFOPA22"
              />
            </Label>
            <Label>
              AUTONOMIA:
              <Input
                id="autonomia"
                name="autonomia"
                type="text"
                defaultValue={car.autonomia}
                onChange={handleInputChange}
                placeholder="Ex: UFOPA22"
              />
            </Label>
            <Label>
              DESCRIÇÃO:
              <Input
                id="descricao"
                name="descricao"
                defaultValue={car.descricao}
                type="text"
                onChange={handleInputChange}
                placeholder="Ex: Possui 4 portas..."
              />
            </Label>
            <Label>
              COMBUSTÍVEL:
              <Input
                id="combustivel"
                name="combustivel"
                type="text"
                defaultValue={car.combustivel}
                onChange={handleInputChange}
                placeholder="Ex: diesel"
              />
            </Label>
            <Label>
              MOTOR:
              <Input
                id="motor"
                name="motor"
                type="text"
                defaultValue={car.motor}
                onChange={handleInputChange}
                placeholder="Ex: Motor vertical"
              />
            </Label>
            <Label>
              POTÊNCIA:
              <Input
                id="potencia"
                name="potencia"
                type="text"
                defaultValue={car.potencia}
                onChange={handleInputChange}
                placeholder="Ex: 1.6"
              />
            </Label>
            <Label>
              VALOR POR DIA:
              <Input
                id="valorDia"
                name="valorDia"
                type="number"
                defaultValue={car.valorDia}
                onChange={handleInputChange}
                placeholder="Ex: 100"
              />
            </Label>
            <Label>
              TAXA:
              <Input
                id="taxa"
                name="taxa"
                type="number"
                defaultValue={car.taxa}
                onChange={handleInputChange}
                placeholder="Ex: 100"
              />
            </Label>
          </ContainerInput>

          <ContainerButton>
            <Button onClick={editCar}>ATUALIZAR</Button>
          </ContainerButton>
        </ContainerInfo>
      ) : (
        <ContainerInfo style={style}>ACESSO NEGADO!</ContainerInfo>
      )}

      <Footer />
    </Container>
  );
}
