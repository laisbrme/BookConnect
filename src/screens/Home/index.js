import React from "react";
import { Container, MeuText } from "../../styles/styles-geral";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <Container>
      <MeuText fontSize={25} cor={'blue'}>Início - BookConnect</MeuText>
    </Container>
  )
}




export default function Header() {
  return (
    <View style={styles.container}>
      <text>
        <b> Olá Luiz,</b> como é bom <br>te ver aqui.</br>
      </text>

      <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
        <Feather nome="user" size={27} color="FFF" />
      </TouchableOpacity>
    </View>
  );
}




const styles = StyleSheet.create({
   content: {
flexDirection: 'row',
paddingStart: 16,
paddingEnd: 16,
paddingBottom: 44


   }




});

