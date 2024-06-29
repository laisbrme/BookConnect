import React from "react";
import { ScrollView } from "react-native";
import { MeuText } from "../../styles/styles-geral";
import { LayoutText, ListCards } from "./styles";
import { theme } from "../../styles/theme";
import { Background1 } from "../../components/Backgrounds";
import { BookCard } from "../../components/BookCard";
import SearchBar from "../../components/SearchBar";

export default function News({ navigation }) {
	const emConstrucao = () => {
		navigation.navigate("UnderConstruction");
	};

	const livroSelecionado = () => {
		navigation.navigate("SelectedBook");
	};

	return (
		<ScrollView>
			<Background1>
				<LayoutText>
					<MeuText cor={theme.colors.BRANCO}>
						Confira nossas novidades deste mês.
					</MeuText>
				</LayoutText>
				<SearchBar />
				<ListCards>
					<BookCard
						onPress={emConstrucao}
						item={{
							image_url: "../../../assets/books/MaskBookCard01.png",
							titulo: "Identidade Roubada",
							autor: "Nora Roberts",
							favoritado: false,
						}}
					/>
					<BookCard
						onPress={emConstrucao}
						item={{
							image_url: "../../../assets/books/MaskBookCard02.png",
							titulo: "Diário de um Banana",
							autor: "Jeff Kinney",
							favoritado: false,
						}}
					/>
					<BookCard
						onPress={emConstrucao}
						item={{
							image_url: "../../../assets/books/MaskBookCard03.png",
							titulo: "Um Crime Adormecido",
							autor: "Agatha Christie",
							favoritado: true,
						}}
					/>
					<BookCard
						onPress={livroSelecionado}
						item={{
							image_url: "../../../assets/books/MaskBookCard04.png",
							titulo: "O Meu Pé de Laranja Lima",
							autor: "José Vasconcelos",
							favoritado: true,
						}}
					/>
					<BookCard
						onPress={emConstrucao}
						item={{
							image_url: "../../../assets/books/MaskBookCard05.png",
							titulo: "Chucky",
							autor: "Dustin McNeill",
							favoritado: true,
						}}
					/>
					<BookCard
						onPress={emConstrucao}
						item={{
							image_url: "../../../assets/books/MaskBookCard06.png",
							titulo: "Madonna",
							autor: "Mary Gabriel",
							favoritado: false,
						}}
					/>
				</ListCards>
			</Background1>
		</ScrollView>
	);
}
