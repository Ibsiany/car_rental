import React from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container, ContainerBanner, ContainerTitle, Title } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <ContainerBanner>
        <ContainerTitle>
          <Title>Pra frente e avante!</Title>
        </ContainerTitle>
      </ContainerBanner>
      <Footer />
    </Container>
  );
}
