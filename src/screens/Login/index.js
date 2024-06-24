import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Container, MeuText } from "../../styles/styles-geral";
import MyInput from "../../components/MyInputs";
import MyButton from "../../components/MyButtons";
import { Background1 } from "../../components/Backgrounds";

export default function Login({ navigation }) {
	const logar = () => {
		navigation.navigate("Home");
	};

	return (
			<Background1>
				<MeuText>Entrar</MeuText>
				<MeuText>Para entrar, insira seu nome de usuário e senha:</MeuText>

				<MyInput placeHolder="Usuário" comMascara={false} />

				<MyInput placeHolder="Senha" comMascara={true} />

				<MyButton value="Entrar" callback={logar} />
			</Background1>
	);
}
