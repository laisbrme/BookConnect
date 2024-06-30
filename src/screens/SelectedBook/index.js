import React from "react";
import { ScrollView } from "react-native";
import { MyButton } from "../../components/MyButtons";
import {
	MaskGroup,
	BookCover,
	InterationGroup,
	TextBox,
	InteractiveBox,
	BoxIcons,
	BoxIconsText,
	BookmarkIcon,
	InteractiveTextBox,
	HeartIcon,
	ChatIcon,
	ButtonView,
	ListChapters,
	TitleChapter,
	ChapterView,
	TextChapter,
	BoxCheckIcon,
	CheckIcon,
} from "./styles";
import { MeuText } from "../../styles/styles-geral";
import { theme } from "../../styles/theme";

export default function SelectedBook({ navigation }) {
	const Comentar = () => {
		navigation.navigate("Comments");
	};

	const ReescreverFinal = () => {
		navigation.navigate("RewriteEnding");
	};

	return (
		<ScrollView>
			<MaskGroup>
				<BookCover source={{ uri: "../../../assets/books/LayerBook.png" }} />
			</MaskGroup>
			<InterationGroup>
				<TextBox>
					<MeuText
						fontSize={theme.metrics.px(14)}
						cor={theme.colors.BRANCO}
						fontFamily={theme.fonts.semiBold}
					>
						O Meu pé de Laranja Lima
					</MeuText>
					<MeuText
						fontSize={theme.metrics.px(12)}
						cor={theme.colors.BRANCO}
						fontFamily={theme.fonts.regular}
						mt={theme.metrics.px(10)}
					>
						José Vasconcelos
					</MeuText>
					<MeuText
						fontSize={theme.metrics.px(12)}
						cor={theme.colors.BRANCO}
						fontFamily={theme.fonts.extraLight}
						mt={theme.metrics.px(10)}
					>
						Este livro retrata a história de um menino de seis anos chamado
						Zezé, que pertencia a uma família muito pobre e numerosa. Sua mãe
						trabalhava numa fábrica e o pai estava desempregado. Passavam por
						muitas dificuldades, pelo que as irmãs mais velhas tomavam conta dos
						mais novos e, por sua vez, Zezé tomava conta do seu irmão mais novo,
						Luís.
					</MeuText>
				</TextBox>
				<InteractiveBox>
					<BoxIconsText>
						<BoxIcons>
							<BookmarkIcon />
						</BoxIcons>
						<InteractiveTextBox>
							<MeuText
								fontSize={theme.metrics.px(11)}
								cor={theme.colors.BRANCO}
							>
								Adicionar às Leituras
							</MeuText>
						</InteractiveTextBox>
					</BoxIconsText>
					<BoxIconsText>
						<BoxIcons>
							<HeartIcon />
						</BoxIcons>
						<InteractiveTextBox>
							<MeuText
								fontSize={theme.metrics.px(11)}
								cor={theme.colors.BRANCO}
							>
								Adicionar aos Favoritos
							</MeuText>
						</InteractiveTextBox>
					</BoxIconsText>
					<BoxIconsText>
						<BoxIcons>
							<ChatIcon />
						</BoxIcons>
						<InteractiveTextBox onPress={Comentar}>
							<MeuText
								fontSize={theme.metrics.px(11)}
								cor={theme.colors.BRANCO}
							>
								Comentar Livro
							</MeuText>
						</InteractiveTextBox>
					</BoxIconsText>
				</InteractiveBox>
			</InterationGroup>
			<ButtonView onPress={ReescreverFinal}>
				<MeuText
					fontSize={theme.metrics.px(12)}
					cor={theme.colors.BRANCO}
				>
					Reescreva seu Final
				</MeuText>
			</ButtonView>
			<ListChapters>
				<TitleChapter>
					<MeuText
						fontSize={theme.metrics.px(14)}
						fontFamily={theme.fonts.semiBold}
					>
						CAPÍTULOS
					</MeuText>
				</TitleChapter>
				<TitleChapter>
					<MeuText fontSize={theme.metrics.px(12)}>PRIMEIRA PARTE</MeuText>
				</TitleChapter>

				<ChapterView>
					<TextChapter>
						<MeuText
							fontSize={theme.metrics.px(12)}
							fontFamily={theme.fonts.light}
						>
							O descobridor das coisas
						</MeuText>
					</TextChapter>
					<BoxCheckIcon>
						<CheckIcon />
					</BoxCheckIcon>
				</ChapterView>

				<ChapterView>
					<TextChapter>
						<MeuText
							fontSize={theme.metrics.px(12)}
							fontFamily={theme.fonts.light}
						>
							Um certo pé de laranja lima
						</MeuText>
					</TextChapter>
					<BoxCheckIcon>
						<CheckIcon />
					</BoxCheckIcon>
				</ChapterView>

				<ChapterView>
					<TextChapter>
						<MeuText
							fontSize={theme.metrics.px(12)}
							fontFamily={theme.fonts.light}
						>
							Os dedos magros da pobreza
						</MeuText>
					</TextChapter>
					<BoxCheckIcon>
						<CheckIcon />
					</BoxCheckIcon>
				</ChapterView>

				<ChapterView>
					<TextChapter>
						<MeuText
							fontSize={theme.metrics.px(12)}
							fontFamily={theme.fonts.light}
						>
							O passarinho, a escola e a flor
						</MeuText>
					</TextChapter>
					<BoxCheckIcon>
						<CheckIcon />
					</BoxCheckIcon>
				</ChapterView>

				<ChapterView>
					<TextChapter>
						<MeuText
							fontSize={theme.metrics.px(12)}
							fontFamily={theme.fonts.light}
						>
							“Numa cadeia eu hei de verte-te morrer”
						</MeuText>
					</TextChapter>
					<BoxCheckIcon>
						<CheckIcon />
					</BoxCheckIcon>
				</ChapterView>

				<TitleChapter>
					<MeuText fontSize={theme.metrics.px(12)}>SEGUNDA PARTE</MeuText>
				</TitleChapter>

				<ChapterView>
					<TextChapter>
						<MeuText
							fontSize={theme.metrics.px(12)}
							fontFamily={theme.fonts.light}
						>
							O morcego
						</MeuText>
					</TextChapter>
					<BoxCheckIcon>
						<CheckIcon />
					</BoxCheckIcon>
				</ChapterView>

				<ChapterView>
					<TextChapter>
						<MeuText
							fontSize={theme.metrics.px(12)}
							fontFamily={theme.fonts.light}
						>
							A conquista
						</MeuText>
					</TextChapter>
					<BoxCheckIcon>
						<CheckIcon />
					</BoxCheckIcon>
				</ChapterView>

				<ChapterView>
					<TextChapter>
						<MeuText
							fontSize={theme.metrics.px(12)}
							fontFamily={theme.fonts.light}
						>
							Conversa para lá e para cá
						</MeuText>
					</TextChapter>
					<BoxCheckIcon>
						<CheckIcon />
					</BoxCheckIcon>
				</ChapterView>

				<ChapterView>
					<TextChapter>
						<MeuText
							fontSize={theme.metrics.px(12)}
							fontFamily={theme.fonts.light}
						>
							Duas surras memoráveis
						</MeuText>
					</TextChapter>
					<BoxCheckIcon>
						<CheckIcon />
					</BoxCheckIcon>
				</ChapterView>

				<ChapterView>
					<TextChapter>
						<MeuText
							fontSize={theme.metrics.px(12)}
							fontFamily={theme.fonts.light}
						>
							Suave e estranho pedido
						</MeuText>
					</TextChapter>
					<BoxCheckIcon>
						<CheckIcon />
					</BoxCheckIcon>
				</ChapterView>

				<ChapterView>
					<TextChapter>
						<MeuText
							fontSize={theme.metrics.px(12)}
							fontFamily={theme.fonts.light}
						>
							De pedaço em pedaço é que se faz ternura
						</MeuText>
					</TextChapter>
					<BoxCheckIcon>
						<CheckIcon />
					</BoxCheckIcon>
				</ChapterView>

				<ChapterView>
					<TextChapter>
						<MeuText
							fontSize={theme.metrics.px(12)}
							fontFamily={theme.fonts.light}
						>
							O Mangaratiba
						</MeuText>
					</TextChapter>
					<BoxCheckIcon>
						<CheckIcon />
					</BoxCheckIcon>
				</ChapterView>

				<ChapterView>
					<TextChapter>
						<MeuText
							fontSize={theme.metrics.px(12)}
							fontFamily={theme.fonts.light}
						>
							Tantas são as velhas árvores
						</MeuText>
					</TextChapter>
					<BoxCheckIcon>
						<CheckIcon />
					</BoxCheckIcon>
				</ChapterView>

				<ChapterView>
					<TextChapter>
						<MeuText
							fontSize={theme.metrics.px(12)}
							fontFamily={theme.fonts.light}
						>
							A confissão final
						</MeuText>
					</TextChapter>
					<BoxCheckIcon>
						<CheckIcon />
					</BoxCheckIcon>
				</ChapterView>
			</ListChapters>
		</ScrollView>
	);
}
