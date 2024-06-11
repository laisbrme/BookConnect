import styled from "styled-components/native";
import { CORES } from "../constants/cores";
import {
	useFonts,
	Poppins_100Thin,
	Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

const LogoImage = styled.Image`
	width: 12.375rem;
	height: 11.59375rem;
`;

const Container = styled.View`
	flex: 1;
	background-color: ${(props) =>
		props.selecionado ? CORES.COR_PRIMARIA : CORES.COR_FUNDO_LIGHT};
	align-items: center;
	justify-content: center;
	padding: 20px;
`;
const MeuText = styled.Text`
	font-size: ${(props) => props.fontSize || 14};
	color: ${(props) => props.cor || CORES.TEXTO_ESCURO};
	font-family: "Helvetica";
`;

export { Container, MeuText, LogoImage };
