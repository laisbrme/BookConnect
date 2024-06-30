import React from "react";
import { MeuText } from "../../styles/styles-geral";
import { Container } from "./styles";

const MyButton = (children, ...props) => {
	return (
		<Container onPress={onPress}>
			<MeuText {...props}>{children}</MeuText>
		</Container>
	);
};

export default MyButton;
