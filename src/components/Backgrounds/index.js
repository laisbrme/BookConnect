import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { colors } from "../../styles/colors"

const statusBarHeight = StatusBar.currentHeight
	? StatusBar.currentHeight + 22
	: 64;

/* HEADER */
const Background1 = styled.View`
	display: flex;
	flex-direction: column;
	padding-top: 36px;
	padding-right: 16px;
	padding-bottom: 44px;
	padding-top: ${statusBarHeight};
	background-color: ${colors.ROXO};
	height: 50%;
	width: 100%;
	border-end-start-radius: 56px;
	border-end-end-radius: 56px;
`;

const Background2 = styled.View`
	display: flex;
	flex-direction: column;
	padding-top: 36px;
	padding-right: 16px;
	padding-bottom: 44px;
	padding-top: ${statusBarHeight};
	background-color: ${colors.ROXO};
	height: 57.5%;
	width: 100%;
	border-end-start-radius: 16px;
	border-end-end-radius: 16px;
`;

export { Background1, Background2 };
