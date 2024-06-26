import React from "react";
import { Background1 } from "../../components/Backgrounds";
import SearchBar from "../../components/SearchBar";
import LinkShare from "../../components/LinkShare";
import { BookCard } from "../../components/BookCard";
import { MeuText } from "../../styles/styles-geral";
import { LayoutText, ListCards } from "./styles";
import { theme } from "../../styles/theme";

export default function Favorites({ navigation }) {
	return (
		<Background1>
			<LayoutText>
				<MeuText cor={theme.colors.BRANCO}>
					Aqui está a sua estante de favoritos.
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
					}}
				/>
				<BookCard
					item={{
						image_url: "../../../assets/books/MaskBookCard02.png",
						titulo: "Diário de um Banana",
						autor: "Jeff Kinney",
					}}
				/>
				<BookCard
					item={{
						image_url: "../../../assets/books/MaskBookCard03.png",
						titulo: "Um Crime Adormecido",
						autor: "Agatha Christie",
					}}
				/>
				<BookCard
					item={{
						image_url: "../../../assets/books/MaskBookCard04.png",
						titulo: "O Meu Pé de Laranja Lima",
						autor: "José Vasconcelos",
					}}
				/>
				<BookCard
					item={{
						image_url: "../../../assets/books/MaskBookCard05.png",
						titulo: "Chucky",
						autor: "Dustin McNeill",
					}}
				/>
				<BookCard
					item={{
						image_url: "../../../assets/books/MaskBookCard06.png",
						titulo: "Madonna",
						autor: "Mary Gabriel",
					}}
				/>
			</ListCards>
		</Background1>
	);
}
