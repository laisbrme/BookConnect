import React from "react";
import { ScrollView } from "react-native";
import { MeuText } from "../../styles/styles-geral";
import { theme } from "../../styles/theme";
import {
	Background,
	BoxTextInput,
	Box,
	BoxContent,
	StarIcon,
	BoxButtons,
	CancelButton,
	PublishButton,
} from "./styles";

export default function Comments({ navigation }) {
	return (
		<ScrollView>
			<Background>
				<BoxTextInput>
					<MeuText
						fontSize={theme.metrics.px(13)}
						cor={theme.colors.CINZA}
						fontFamily={theme.fonts.lightItalic}
					>
						Deixe um comentário sobre o livro O Meu pé de Laranja Lima
					</MeuText>
				</BoxTextInput>

				<Box>
					<BoxContent>
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
					</BoxContent>
					<BoxButtons>
						<CancelButton onPress={() => navigation.goBack()}>
							<MeuText
								fontSize={theme.metrics.px(12)}
								cor={theme.colors.BRANCO}
								fontFamily={theme.fonts.medium}
								mt={theme.metrics.px(6)}
							>
								Cancelar
							</MeuText>
						</CancelButton>
						<PublishButton>
							<MeuText
								fontSize={theme.metrics.px(12)}
								cor={theme.colors.ROXO}
								fontFamily={theme.fonts.medium}
								mt={theme.metrics.px(8)}
							>
								Publicar
							</MeuText>
						</PublishButton>
					</BoxButtons>
				</Box>
			</Background>
		</ScrollView>
	);
}
