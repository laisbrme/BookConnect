import React from "react";
import { MeuText } from "../../styles/styles-geral";
import { Container } from "./styles";
import { theme } from "../../styles/theme";

const MyButton = (props) => {
	return (
		<Container onPress={props.onPress} bg={props.bg}>
			<MeuText fontSize={theme.metrics.px(16)} cor={props.cor}>
				{props.children}
			</MeuText>
		</Container>
	);
};

export default MyButton;
