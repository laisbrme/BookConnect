import React from "react";
import { ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import {} from "@fontsource/poppins";
import { MeuText } from "../../styles/styles-geral";
import { theme } from "../../styles/theme";
import { ButtonUser, Content, ListCards, Username } from "./styles";
import { Background1 } from "../../components/Backgrounds";
import SearchBar from "../../components/SearchBar";
import { HomeCard } from "../../components/HomeCard";

// const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Home({ navigation }) {
	return (
		<ScrollView>
			<Background1>
				<Content>
					<ButtonUser>
						<Feather name="user" size={27} color="#333061" />
					</ButtonUser>
					<Username>
						<MeuText
							cor={theme.colors.BRANCO}
							fontFamily={theme.fonts.semiBold}
						>
							Olá Luiz,
						</MeuText>
						<MeuText cor={theme.colors.BRANCO} fontFamily={theme.fonts.light}>
							como é bom te ver aqui.
						</MeuText>
					</Username>
					<SearchBar />
				</Content>
				<ListCards>
					<HomeCard
						item={{
							image_url: "../../../assets/books/Novidades.png",
							titulo: "Novidades do mês!",
							conteudo: "Livros  novinhos disponíveis em nossa loja!",
							link: "clique e veja mais...",
						}}
					/>

					<HomeCard
						item={{
							image_url: "../../../assets/books/Eventos.png",
							titulo: "Eventos",
							conteudo:
								"Participe de discussões e compartilhe suas experiências literárias com outros usuários.",
							link: "clique e veja mais...",
						}}
					/>
				</ListCards>
			</Background1>
		</ScrollView>
	);
}
