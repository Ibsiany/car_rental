import {
  Container,
  ContainerLogo,
  Image,
  LogoInfo,
  ContainerContact,
  ContactInfo,
} from './styles';
import logo from '../../assets/logo.png';

export function Footer() {
  return (
    <Container>
      <ContainerLogo>
        <Image src={logo} alt="logo" />
        <LogoInfo>@2023 Car Rental.</LogoInfo>
      </ContainerLogo>

      <ContainerContact>
        <ContactInfo>Telefone: +55 31 999999999</ContactInfo>
        <ContactInfo>
          Localização: Rua 36, 115 - Loanda, João Monlevade - MG, 35931-008
        </ContactInfo>
        <ContactInfo>suporte@carrental.com.br</ContactInfo>
      </ContainerContact>
    </Container>
  );
}
