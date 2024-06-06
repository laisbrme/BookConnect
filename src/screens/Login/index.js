import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MyInput from "../../components/MyInputs";
import MyButton from "../../components/MyButtons";

export default function Login({ navigation }) {
	const logar = () => {
		navigation.navigate("Home");
	};

	return (
		<View style={styles.boxLogin}>
			<Text style={styles.tituloLogin}>Entrar</Text>
			<Text style={styles.textoLogin}>
				Para entrar, insira seu nome de usuário e senha:
			</Text>

			<MyInput placeHolder="Usuário" comMascara={false} />

			<MyInput placeHolder="Senha" comMascara={true} />

			<MyButton value="Entrar" callback={logar} />
		</View>
	);
}

const styles = StyleSheet.create({
	boxLogin: {
		flex: 1,
		justifyContent: "center",
		alignItems: "left",
		backgroundColor: "#fff",
	},
	tituloLogin: {
		fontSize: 26,
		textAlign: "left",
	},
	textoLogin: {
		fontSize: 16,
		textAlign: "left",
	},
});
