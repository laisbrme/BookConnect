import React from "react";
import { Background1 } from "../../components/Backgrounds";
import SearchBar from "../../components/SearchBar";
import LinkShare from "../../components/LinkShare";
import { MeuText } from "../../styles/styles-geral";
import { LayoutText, ListCards } from "./styles";
import { theme } from "../../styles/theme";

export default function Reading({ navigation }) {
	return (
		<Background1>
			<LayoutText>
				<MeuText cor={theme.colors.BRANCO}>
					Aqui está a sua estante de leituras.
				</MeuText>
			</LayoutText>
			<SearchBar />
			<LinkShare />
		</Background1>
	);
}
