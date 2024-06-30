import React from "react";
import { Container, MeuText } from "../../styles/styles-geral";
import MyInput from "../../components/MyInputs";
import MyButton from "../../components/MyButtons";
import { Background1 } from "../../components/Backgrounds";
import { Logo } from "../../components/Logo";
import { theme } from "../../styles/theme";
import { TextField, Text, FormField, Link, Powered } from "./styles";

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
					Bem vindo(a) ao BOOK CONNECT, realize o login para a melhor
					experiência
				</Text>
			</TextField>

			<FormField>
				<MyInput
					placeHolder="Usuário"
					comMascara={false}
					iconName={"account-multiple"}
				/>

				<MyInput placeHolder="Senha" comMascara={true} iconName={"key"} />

				<MyButton
					children={"Entrar"}
					onPress={logar}
					cor={theme.colors.BRANCO}
				/>

				<Link>
					<MeuText
						cor={theme.colors.ROXO}
						fontSize={theme.metrics.px(16)}
						mt={theme.metrics.px(10)}
					>
						Esqueceu sua senha?
					</MeuText>
				</Link>

				<MyButton
					children={"Cadastrar"}
					cor={theme.colors.ROXO}
					bg={theme.colors.BRANCO}
				/>
			</FormField>

			<Powered>
				<Link>
					<MeuText mt={theme.metrics.px(50)} cor={theme.colors.CINZA} fontSize={theme.metrics.px(16)}>
						Powered by {"grupo 08 team®"}
					</MeuText>
				</Link>
			</Powered>
		</Background1>
	);
}
