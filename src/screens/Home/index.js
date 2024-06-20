import React from "react";
import { Container, MeuText } from "../../styles/styles-geral";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import {} from "@fontsource/poppins"


export default function Home( { navigation }) {
	return (
	  <View style={styles.container}>
		<View style={styles.content}>
		<Text style={styles.username}>Olá Luiz,como é bom te ver aqui.</Text>
  
		<TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
		  <Feather name="user" size={27} color="#333061" />
		</TouchableOpacity>
	  
		</View>
		</View>
	);
  }
  
  
  
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      paddingStart: 16,
      paddingEnd: 16,
      paddingBottom: 44,
    },
    content: {
      flex: 1,
      alignItems: "center",
	  flexDirection: 'row',
    }
  
});
  
  