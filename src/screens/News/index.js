import React from "react";
import { Container, BackgroundRoxo1, MeuText } from "../../styles/styles-geral";
import { ContainerNews, LayoutText, ListCards } from "./styles";
import { colors } from "../../styles/colors";


export default function News({ navigation }) {
	return (
		<BackgroundRoxo1>
			<Container>
				<ContainerNews>
					<LayoutText>
						<MeuText cor={colors.BRANCO}>
							Confira nossas novidades deste mês.
						</MeuText>
					</LayoutText>
				</ContainerNews>
			</Container>
		</BackgroundRoxo1>
	);
}
