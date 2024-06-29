import React from "react";
import {
	Container,
	MaskGroup,
	BookCover,
	TextGroup,
    LinkHomeCard,

} from "./styles";
import { theme } from "../../styles/theme";
import { MeuText } from "../../styles/styles-geral";

export const HomeCard = ({ item, onPress }) => {
	return (
    <Container onPress={onPress}>
      <MaskGroup>
        <BookCover source={{ uri: item.image_url }} />
      </MaskGroup>
      <TextGroup>
        
        <MeuText fontSize={12} fontFamily={theme.fonts.semiBold}>
          {item.titulo}
        </MeuText>

        <MeuText fontSize={12} fontFamily={theme.fonts.light}>
          {item.conteudo}
        </MeuText>

        <LinkHomeCard>
        clique e veja mais...
        </LinkHomeCard>


      
        </TextGroup>
    </Container>
  );
};
