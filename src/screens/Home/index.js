import React from "react";
// import { Container, MeuText } from "../../styles/styles-geral";
// import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import {} from "@fontsource/poppins";
import { ButtonUser, Content, Username } from "./styles.js";
import { Background1 } from "../../components/Backgrounds"

// const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Home({ navigation }) {
	return (
		<Background1>
			<Content>
				<ButtonUser>
					<Feather name="user" size={27} color="#333061" />
				</ButtonUser>
				<Username>Olá Luiz, como é bom te ver aqui.</Username>
			</Content>
		</Background1>
	);
}
