import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Container } from "../../styles/styles-geral";
import { CustomText } from "../../components";
import MyInput from "../../components/MyInputs";
import MyButton from "../../components/MyButtons";

export default function Login({ navigation }) {
	const logar = () => {
		navigation.navigate("Home");
	};

	return (
		<Container>
			<Text>Entrar</Text>
			<Text>Para entrar, insira seu nome de usuário e senha:</Text>

			<MyInput placeHolder="Usuário" comMascara={false} />

			<MyInput placeHolder="Senha" comMascara={true} />

			<MyButton value="Entrar" callback={logar} />
		</Container>
	);
}
