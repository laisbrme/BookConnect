import React from "react";
import { Container, BackgroundRoxo1, MeuText } from "../../styles/styles-geral";

export default function Events({ navigation }) {
	return (
		<BackgroundRoxo1>
			<Container>
				<MeuText fontSize={25} cor={"blue"}>
					Página Eventos
				</MeuText>
			</Container>
		</BackgroundRoxo1>
	);
}
