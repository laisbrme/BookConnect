import React from "react";
import { Container, MeuText } from "../../styles/styles-geral";
import { theme } from "../../styles/theme";
import { Background1 } from "../../components/Backgrounds";
import { ScrollView } from "react-native";
import { Content, ListCards } from "./styles";
import SearchBar from "../../components/SearchBar";
import { EventsCard } from "../../components/EventsCard";


export default function Events({ navigation }) {
	return (
		<ScrollView>
			<Background1>
				<Content>
					<MeuText
						cor={theme.colors.BRANCO}
						fontFamily={theme.fonts.light}
						fontSize={18}
					>
						{`Confira nossos \npróximos eventos! `}
					</MeuText>
					<SearchBar />
				</Content>
				<ListCards>
					<EventsCard
						item={{
							image_url: "../../../assets/events/01.png",
							curtido: true
						}}
					/>

					<EventsCard
						item={{
							image_url: "../../../assets/events/02.png",
							curtido: false
						}}
					/>
				</ListCards>
			</Background1>
		</ScrollView>
	);
}
