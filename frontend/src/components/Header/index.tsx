import { Link } from 'react-router-dom';
import {
  Container,
  ContainerInfo,
  TitleInfoContainer,
  Contact,
  ContactInfo,
  ContainerButtons,
  ContainerPage,
  ContainerImage,
  Image,
  Title,
} from './styles';
import logo from '../../assets/logo.png';

export function Header() {
  return (
    <Container>
      <ContainerInfo>
        <TitleInfoContainer>
          <Contact>Telefone</Contact>
          <ContactInfo>Car Rental</ContactInfo>
        </TitleInfoContainer>
        <Image src={logo} alt="logo" />
        <TitleInfoContainer>
          <Contact>Contato</Contact>
          <ContactInfo>Car Rental</ContactInfo>
        </TitleInfoContainer>
      </ContainerInfo>
      <ContainerButtons>
        <Link to="/" id="home">
          <ContainerImage>
            <Title>Car Rental</Title>
            <Image src={logo} alt="logo" />
          </ContainerImage>
        </Link>
        <ContainerPage>
          <Link to="/rent" id="rent">
            ALUGAR
          </Link>
          <Link to="/give-back" id="give-back">
            DEVOLVER
          </Link>
        </ContainerPage>
      </ContainerButtons>
    </Container>
  );
}
