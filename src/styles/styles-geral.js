import styled from "styled-components/native";
import { theme } from "./theme";

const Container = styled.View`
	flex: 1;
	background-color: ${(props) =>
		props.selecionado ? theme.colors.COR_PRIMARIA : theme.colors.COR_FUNDO_LIGHT};
	align-items: center;
	justify-content: center;
	padding-left: 20px;
	padding-right: 20px;
`;

const MeuText = styled.Text`
	font-size: ${(props) => props.fontSize || theme.metrics.px(18)}px;
	color: ${(props) => props.cor || theme.colors.TEXTO_ESCURO};
	font-family: ${(props) => props.fontFamily || theme.fonts.regular};
	line-height: 109%;
	
`;

export { Container, MeuText };
