import React from "react";
import { Container, MeuText } from "../../styles/styles-geral";

export default function Home({ navigation }) {
  return (
    <Container>
      <MeuText fontSize={25} cor={'blue'}>Página Início</MeuText>
    </Container>
  )
}
