import React from "react";
import { Container, BackgroudRoxo1, MeuText } from "../../styles/styles-geral";

export default function Favorites({ navigation }) {
  return (
    <BackgroudRoxo1 >
      <Container>
        <MeuText fontSize={25} cor={'blue'}>Página Favoritos</MeuText>
      </Container>
    </BackgroudRoxo1>
  )
}
