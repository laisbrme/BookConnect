import React from "react";
// import { Container, MeuText } from "../../styles/styles-geral";
// import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import {} from "@fontsource/poppins";
import { ButtonUser, Content, Username } from "./styles.js";
import { Background1 } from "../../components/Backgrounds"
import SearchBar from "../../components/SearchBar";
import { HomeCard } from "../../components/homecard";
import { LayoutText, ListCards} from "./styles";
import { ScrollView } from "react-native";

// const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <Background1>
           <Content>
          <ButtonUser>
            <Feather name="user" size={27} color="#333061" />
          </ButtonUser>
          <Username>Olá Luiz, como é bom te ver aqui.</Username>

          <SearchBar />
        </Content>

        <ListCards>
          <HomeCard
            item={{
              image_url: "../../../assets/books/Rectangle 462.png",
              titulo: "Novidades do mês!",
              conteudo: "Livros  novinhos disponiveis em nossa loja!",
              link: "clique e veja mais...",
            }}
          />

          <HomeCard
            item={{
              image_url: "../../../assets/books/Rectangle 462 (1).png",
              titulo: "Eventos",
              conteudo: "Participe de discussões e compartilhe suas experiências literárias com outros usuários.",
              link: "clique e veja mais...",
            }}
          />
        
		
		</ListCards>
      </Background1>
    </ScrollView>
  














);
}
