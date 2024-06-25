import React from "react";
import { Container, BoxIconShare, ShareIcon } from "./styles";
import { MeuText } from "../../styles/styles-geral"
import { theme } from "../../styles/theme";

export default function LinkShare() {
	return (
		<Container>
            <MeuText cor={theme.colors.BRANCO} fontSize={12}>
                Comportilhe sua estante com seus amigos!
            </MeuText>
			<BoxIconShare>
				<ShareIcon />
			</BoxIconShare>
		</Container>
	);
}
