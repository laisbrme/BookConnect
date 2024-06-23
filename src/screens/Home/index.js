import React from "react";
import { Container, MeuText } from "../../styles/styles-geral";
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import {} from "@fontsource/poppins";
import {  ContainerHome, ButtonUser, Content, Username  } from "./styles.js";


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function Home({ navigation }) {
  return (
    <ContainerHome>
      <Content>
        <Username>
        
        Olá Luiz, como é bom te ver aqui.

        </Username>

        <ButtonUser>
          <Feather name="user" size={27} color="#333061" />
        </ButtonUser>
      
      </Content>
    </ContainerHome>
  );
}




  
