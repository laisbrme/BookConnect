import styled from "styled-components/native";
import { colors } from "./colors";
import { fonts } from "./fonts";

const Container = styled.View`
	flex: 1;
	background-color: ${(props) =>
		props.selecionado ? colors.COR_PRIMARIA : colors.COR_FUNDO_LIGHT};
	align-items: center;
	justify-content: center;
	padding-left: 20px;
	padding-right: 20px;
`;

const MeuText = styled.Text`
	font-size: ${(props) => props.fontSize || 18}px;
	color: ${(props) => props.cor || colors.TEXTO_ESCURO};
	font-family: ${(props) => props.fontFamily || fonts.regular};
	line-height: 109%;
`;

export { Container, MeuText };
