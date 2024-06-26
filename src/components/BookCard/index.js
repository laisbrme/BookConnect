import React from "react";
import {
	Container,
	MaskGroup,
    BookCover,
	TextGroup,
	TextBox,
	BoxIcon,
	HeartIcon,
} from "./styles";
import { theme } from "../../styles/theme";
import { MeuText } from "../../styles/styles-geral";


export const BookCard = ({ item }) => {
	return (
		<Container>
			<MaskGroup>
                <BookCover source={{ uri: item.image_url }} />
            </MaskGroup>
			<TextGroup>
				<TextBox>
                    <MeuText fontSize={10} fontFamily={theme.fonts.semiBold}>{item.titulo}</MeuText>
                    <MeuText fontSize={10} fontFamily={theme.fonts.extraLight}>{item.autor}</MeuText>
				</TextBox>
				<BoxIcon>
					<HeartIcon />
				</BoxIcon>
			</TextGroup>
		</Container>
	);
}
