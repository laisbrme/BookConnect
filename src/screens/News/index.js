import React from "react";
import { Container, BackgroudRoxo1, MeuText } from "../../styles/styles-geral";

export default function News({ navigation }) {
	return (
		<BackgroudRoxo1>
			<Container>
				<MeuText fontSize={25} cor={"blue"}>
					Página Novidades
				</MeuText>
			</Container>
		</BackgroudRoxo1>
	);
}
