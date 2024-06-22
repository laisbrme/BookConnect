import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Container, BackgroudRoxo1, MeuText } from "../../styles/styles-geral";
import { CustomText } from "../../components";
import MyInput from "../../components/MyInputs";
import MyButton from "../../components/MyButtons";

export default function Login({ navigation }) {
	const logar = () => {
		navigation.navigate("Home");
	};

	return (
		<BackgroudRoxo1>
			<Container>
				<MeuText>Entrar</MeuText>
				<MeuText>Para entrar, insira seu nome de usuário e senha:</MeuText>

				<MyInput placeHolder="Usuário" comMascara={false} />

				<MyInput placeHolder="Senha" comMascara={true} />

				<MyButton value="Entrar" callback={logar} />
			</Container>
		</BackgroudRoxo1>
	);
}
