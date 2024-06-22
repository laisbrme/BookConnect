import styled from "styled-components/native";
import { colors } from "./colors";
import { fonts } from "./fonts";

const Container = styled.View`
	flex: 1;
	background-color: ${(props) =>
		props.selecionado ? colors.COR_PRIMARIA : colors.COR_FUNDO_LIGHT};
	align-items: center;
	justify-content: center;
	padding: 20px;
`;

const BackgroundRoxo1 = styled.View`
	position: absolute;
	flex: 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 48.74%;
	background: ${colors.COR_PRIMARIA};
	border-bottom-left-radius: 56px;
	border-bottom-right-radius: 56px;
`;

const BackgroundRoxo2 = styled.View`
	position: absolute;
	flex: 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 57.53%;
	background: ${colors.COR_PRIMARIA};
	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;
`;

const MeuText = styled.Text`
	font-size: ${(props) => props.fontSize || 18};
	color: ${(props) => props.cor || colors.TEXTO_ESCURO};
	font-family: ${(props) => props.fontFamily || fonts.regular};
	line-height: 109%;
`;

export { Container, BackgroundRoxo1, BackgroundRoxo2, MeuText };
