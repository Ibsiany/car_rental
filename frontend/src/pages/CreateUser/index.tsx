import React, { useCallback, ChangeEvent, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
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
import { api } from '../../services/api';
import { IUserDTO } from '../../interfaces/IUserDTO';

export function CreateUser() {
  const [user, setUser] = useState<IUserDTO>({} as IUserDTO);

  const navigate = useNavigate();

  const createUser = useCallback(async () => {
    try {
      await api.post('/cliente', {
        nome: user.nome,
        email: user.email,
        cpf: user.cpf,
        senha: user.senha,
      });

      navigate('/admin/list');
    } catch (error) {
      toast.error('Ocorreu algum erro na criação do usuário!');
    }
  }, [navigate, user]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setUser({ ...user, [name]: value });
    },
    [user],
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
          <Title>Realizar cadastro de usuário</Title>
          <ContainerInput>
            <Label>
              NOME:
              <Input
                id="nome"
                name="nome"
                type="text"
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              E-MAIL:
              <Input
                id="email"
                name="email"
                type="text"
                onChange={handleInputChange}
                placeholder="Ex: alguem@email.com"
              />
            </Label>
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
          </ContainerInput>

          <ContainerButton>
            <Button onClick={createUser}>CADASTRAR</Button>
          </ContainerButton>
        </ContainerInfo>
      ) : (
        <ContainerInfo style={style}>ACESSO NEGADO!</ContainerInfo>
      )}

      <Footer />
    </Container>
  );
}
