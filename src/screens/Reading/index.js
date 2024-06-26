import React from "react";
import { ScrollView } from "react-native";
import { Background1 } from "../../components/Backgrounds";
import SearchBar from "../../components/SearchBar";
import LinkShare from "../../components/LinkShare";
import { BookCard } from "../../components/BookCard";
import { MeuText } from "../../styles/styles-geral";
import { theme } from "../../styles/theme";
import { LayoutText, ListCards } from "./styles";

export default function Reading({ navigation }) {
	return (
		<ScrollView>
			<Background1>
				<LayoutText>
					<MeuText cor={theme.colors.BRANCO}>
						Aqui está a sua estante de leituras.
					</MeuText>
				</LayoutText>
				<SearchBar />
				<LinkShare />
				<ListCards>
					<BookCard
						item={{
							image_url: "../../../assets/books/MaskBookCard01.png",
							titulo: "Identidade Roubada",
							autor: "Nora Roberts",
							favoritado: false,
						}}
					/>
					<BookCard
						item={{
							image_url: "../../../assets/books/MaskBookCard02.png",
							titulo: "Diário de um Banana",
							autor: "Jeff Kinney",
							favoritado: false,
						}}
					/>
					<BookCard
						item={{
							image_url: "../../../assets/books/MaskBookCard03.png",
							titulo: "Um Crime Adormecido",
							autor: "Agatha Christie",
							favoritado: true,
						}}
					/>
					<BookCard
						item={{
							image_url: "../../../assets/books/MaskBookCard04.png",
							titulo: "O Meu Pé de Laranja Lima",
							autor: "José Vasconcelos",
							favoritado: true,
						}}
					/>
					<BookCard
						item={{
							image_url: "../../../assets/books/MaskBookCard05.png",
							titulo: "Chucky",
							autor: "Dustin McNeill",
							favoritado: true,
						}}
					/>
					<BookCard
						item={{
							image_url: "../../../assets/books/MaskBookCard06.png",
							titulo: "Madonna",
							autor: "Mary Gabriel",
							favoritado: true,
						}}
					/>
				</ListCards>
			</Background1>
		</ScrollView>
	);
}
