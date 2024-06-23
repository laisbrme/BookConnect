import React from "react";
import { Container, BackgroundRoxo1, MeuText } from "../../styles/styles-geral";

export default function Favorites({ navigation }) {
	return (
		<BackgroundRoxo1>
			<Container>
				<MeuText cor={"blue"}>Página Favoritos</MeuText>
			</Container>
		</BackgroundRoxo1>
	);
}
