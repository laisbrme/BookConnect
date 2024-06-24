import React from "react";
import { Container, MeuText } from "../../styles/styles-geral";
import { Background1 } from "../../components/Backgrounds";


export default function Events({ navigation }) {
	return (
		<Background1>
			<MeuText fontSize={25} cor={"blue"}>
				Página Eventos
			</MeuText>
		</Background1>
	);
}
