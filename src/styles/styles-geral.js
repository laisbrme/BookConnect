import styled from "styled-components/native";
import { colors } from "./colors";

const Container = styled.View`
	flex: 1;
	background-color: ${(props) =>
		props.selecionado ? colors.COR_PRIMARIA : colors.COR_FUNDO_LIGHT};
	align-items: center;
	justify-content: center;
	padding: 20px;
`;
const MeuText = styled.Text`
	font-size: ${(props) => props.fontSize || 14};
	color: ${(props) => props.cor || colors.TEXTO_ESCURO};
`;

export { Container, MeuText };
