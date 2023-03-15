import React, { useCallback, useState, ChangeEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';
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
import { IAdminDTO, IAdminVerifyDTO } from '../../interfaces/IAdminDTO';
import { api } from '../../services/api';

export function Admin() {
  const [user, setUser] = useState<IAdminDTO>({} as IAdminDTO);

  const handleSave = (admin: string) => {
    localStorage.setItem('status', admin);
  };

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setUser({ ...user, [name]: value });
    },
    [user],
  );

  const navigate = useNavigate();

  const verify = useCallback(async () => {
    try {
      const { data }: IAdminVerifyDTO = await api.post(
        '/cliente/verificar',
        user,
      );

      handleSave(data.admin?.toString());

      if (data.admin === true) {
        navigate('/admin/list');
      } else {
        navigate('/');
      }
    } catch (error) {
      toast.error('Você não tem permissão!');
    }
  }, [user, navigate]);

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <ContainerInfo>
        <Title>Tela do administrador</Title>
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
            SENHA:
            <Input
              id="senha"
              name="senha"
              onChange={handleInputChange}
              type="password"
            />
          </Label>
        </ContainerInput>

        <ContainerButton>
          <Button onClick={verify}>Verificar credenciais</Button>
        </ContainerButton>
      </ContainerInfo>
      <Footer />
    </Container>
  );
}
