import React, { useCallback, useState, ChangeEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { api } from '../../services/api';
import { Header } from '../../components/Header';
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
import { ICarDTO } from '../../interfaces/ICarDTO';

export function CreateCar() {
  const [car, setCar] = useState<ICarDTO>({} as ICarDTO);

  const navigate = useNavigate();

  const createCar = useCallback(async () => {
    try {
      await api.post('/carro', {
        placa: car.placa,
        modelo: car.modelo,
        descricao: car.descricao,
        combustivel: car.combustivel,
        nome: car.nome,
        motor: car.motor,
        potencia: car.potencia,
        disponibilidade: true,
        autonomia: car.autonomia,
        valorDia: Number(car.valorDia),
        taxa: Number(car.taxa),
      });

      navigate('/admin/list');
    } catch (error) {
      toast.error('Ocorreu algum erro na criação do carro!');
    }
  }, [car, navigate]);

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
          <Title>Realizar cadastro de carro</Title>
          <ContainerInput>
            <Label>
              NOME:
              <Input
                id="nome"
                name="nome"
                type="text"
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
                onChange={handleInputChange}
                placeholder="Ex: UFOPA22"
              />
            </Label>
            <Label>
              DESCRIÇÃO:
              <Input
                id="descricao"
                name="descricao"
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
                onChange={handleInputChange}
                placeholder="Ex: Motor vertical"
              />
            </Label>
            <Label>
              AUTONOMIA:
              <Input
                id="autonomia"
                name="autonomia"
                type="text"
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              POTÊNCIA:
              <Input
                id="potencia"
                name="potencia"
                type="text"
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
                onChange={handleInputChange}
                placeholder="Ex: 100"
              />
            </Label>
          </ContainerInput>

          <ContainerButton>
            <Button onClick={createCar}>CADASTRAR</Button>
          </ContainerButton>
        </ContainerInfo>
      ) : (
        <ContainerInfo style={style}>ACESSO NEGADO!</ContainerInfo>
      )}

      <Footer />
    </Container>
  );
}
