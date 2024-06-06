import React from "react";
import { Text, View } from "react-native";
import { Container, MeuText } from "../../styles/styles-geral";

export default function Home() {
  return (
    <Container>
      <MeuText fontSize={25} cor={'blue'}>Página Home</MeuText>
    </Container>
  )
}
