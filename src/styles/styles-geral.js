import styled from "styled-components/native";
import { CORES } from "../constants/cores";
import {
	useFonts,
	Poppins_100Thin,
	Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

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
`;

export { Container, MeuText };
