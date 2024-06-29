import React from "react";
import { Container, MeuText } from "../../styles/styles-geral";
import MyInput from "../../components/MyInputs";
import MyButton from "../../components/MyButtons";
import { Background1 } from "../../components/Backgrounds";
import { Logo } from "../../components/Logo";
import { theme } from "../../styles/theme";
import { TextField, Text, FormField } from './styles'


export default function Login({ navigation }) {
	const logar = () => {
		navigation.navigate("Home");
	};

	return (

		<Background1>
			
				<Logo />
				<TextField>
					<Text
						cor={theme.colors.BRANCO}
						fontFamily={theme.fonts.regular}
						fontSize={16}
					>
						Bem vindo(a) ao BOOK CONNECT, realize o login para a melhor experiência
					</Text>
				</TextField>

				<FormField>
					<MyInput placeHolder="Usuário" comMascara={false} iconName={"account-multiple"}/>

					<MyInput placeHolder="Senha" comMascara={true} iconName={"key"}/>

					<MyButton value="Entrar" callback={logar} />
				</FormField>			
		</Background1>

	);
}
