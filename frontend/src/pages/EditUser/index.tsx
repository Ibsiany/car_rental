import React, { useCallback, useEffect, useState, ChangeEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useLocation, useNavigate } from 'react-router-dom';
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
import { IUserDTO } from '../../interfaces/IUserDTO';
import { api } from '../../services/api';

export function EditUser() {
  const [user, setUser] = useState<IUserDTO>({} as IUserDTO);

  const admin = localStorage.getItem('status');

  const location = useLocation();
  const user_id = location.state;

  useEffect(() => {
    api.get(`/cliente/${user_id}`).then(response => {
      setUser(response.data);
    });
  }, [user_id]);

  const navigate = useNavigate();

  const editUser = useCallback(async () => {
    try {
      await api.put(`/cliente/${user_id}`, {
        id: Number(user_id),
        nome: user.nome,
        email: user.email,
        cpf: user.cpf,
        senha: user.senha,
      });

      navigate('/admin/list');
    } catch (error) {
      toast.error('Ocorreu algum erro na edição do usuário!');
    }
  }, [user, navigate, user_id]);

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
      {admin === 'true' ? (
        <ContainerInfo>
          <Title>Realizar edição de usuário</Title>
          <ContainerInput>
            <Label>
              NOME:
              <Input
                id="nome"
                name="nome"
                type="text"
                defaultValue={user.nome}
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              E-MAIL:
              <Input
                id="email"
                name="email"
                type="text"
                defaultValue={user.email}
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
                defaultValue={user.cpf}
                onChange={handleInputChange}
                placeholder="Ex: 13785091000160"
              />
            </Label>
          </ContainerInput>

          <ContainerButton>
            <Button onClick={editUser}>ATUALIZAR</Button>
          </ContainerButton>
        </ContainerInfo>
      ) : (
        <ContainerInfo style={style}>ACESSO NEGADO!</ContainerInfo>
      )}

      <Footer />
    </Container>
  );
}
