import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MyButton from "../../components/MyButtons";

export default function PreLogin({ navigation }) {
	const logar = () => {
		navigation.navigate("Login");
	};

	return (
		<View style={styles.boxPreLogin}>
			<Text style={styles.textoPreLogin}>
				Bem vinda ao BOOKCONNECT, venha conhecer essa experiencia de leitura
				única!
			</Text>

			<MyButton value="Entrar" callback={logar} />
			<MyButton value="Cadastrar" />
		</View>
	);
}

const styles = StyleSheet.create({
	boxPreLogin: {
		flex: 1,
		justifyContent: "center",
		alignItems: "left",
		backgroundColor: "#fff",
	},
	textoPreLogin: {
		fontSize: 16,
		textAlign: "left",
	},
});
