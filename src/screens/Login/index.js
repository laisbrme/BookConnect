import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Container } from "../../styles/styles-geral";
import { CustomText, Logo } from "../../components";
import MyInput from "../../components/MyInputs";
import MyButton from "../../components/MyButtons";

export default function Login({ navigation }) {
	const logar = () => {
		navigation.navigate("Home");
	};

	return (
		<Container>
			<Logo />
			<CustomText>Entrar</CustomText>
			<CustomText>Para entrar, insira seu nome de usuário e senha:</CustomText>

			<MyInput placeHolder="Usuário" comMascara={false} />

			<MyInput placeHolder="Senha" comMascara={true} />

			<MyButton value="Entrar" callback={logar} />
		</Container>
	);
}
