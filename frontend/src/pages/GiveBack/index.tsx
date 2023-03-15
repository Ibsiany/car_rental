import React, { useCallback, useState, ChangeEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import {
  Container,
  ContainerInfo,
  ContainerInput,
  Label,
  Input,
  ContainerButton,
  Button,
} from './styles';
import { IGiveBackDTO } from '../../interfaces/IGiveBackDTO';
import { api } from '../../services/api';

export function GiveBack() {
  const [data, setData] = useState<IGiveBackDTO>({} as IGiveBackDTO);

  const giveBack = useCallback(async () => {
    try {
      await api.post('/car/give-back', {
        data,
      });

      toast.success('Registo de carro devolvido com sucesso!');
    } catch (error) {
      toast.error('Ocorreu algum erro ao registrar devolução!');
    }
  }, [data]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setData({ ...data, [name]: value });
    },
    [data, setData],
  );

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />

      <Header />
      <ContainerInfo>
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
            PLACA:
            <Input
              id="placa"
              name="placa"
              type="text"
              onChange={handleInputChange}
              placeholder="Ex: UFOPA22"
            />
          </Label>
        </ContainerInput>

        <ContainerButton>
          <Button onClick={giveBack}>DEVOLVER</Button>
        </ContainerButton>
      </ContainerInfo>
      <Footer />
    </Container>
  );
}
