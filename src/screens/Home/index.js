import React from "react";
import { Container, MeuText } from "../../styles/styles-geral";
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import {} from "@fontsource/poppins"


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>Olá Luiz, como é bom te ver aqui.</Text>

        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#333061" />
        </TouchableOpacity>
      
      </View>
    </View>
  );
}



/* HEADER */
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingStart: 36,
    paddingEnd: 16,
    /*paddingBottom: 44, */
     /*marginTop: 25, */
    
    /*detalhe roxo atrás */
    paddingTop: statusBarHeight,
    backgroundColor: "#333061",
    height: "75%",
    width: "100%",
    borderEndStartRadius: 50,  /* curvatura apenas nas bordas inferiores */
    borderEndEndRadius: 50,
  
  },
  content: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "column",
    
  },
  buttonUser: {
    paddingTop: 25,     /* espaço entre o icone e o texto */
    width: 44,
    height: 44,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 44 / 2,
    padding: 10 /* tamanho do circulo do icone */
    

  },
  username: {
fontSize: 18,
color: "#FFF",
fontWeight: "bold"

  },

});
  
  