import React from "react";
import { MeuText } from "../../styles/styles-geral";
import { LayoutText, ListCards } from "./styles";
import { theme } from "../../styles/theme";
import { Background1 } from "../../components/Backgrounds";
import SearchBar from "../../components/SearchBar";

export default function News({ navigation }) {
	return (
		<Background1>
			<LayoutText>
				<MeuText cor={theme.colors.BRANCO} >
					Confira nossas novidades deste mês.
				</MeuText>
			</LayoutText>
			<SearchBar />
		</Background1>
	);
}
