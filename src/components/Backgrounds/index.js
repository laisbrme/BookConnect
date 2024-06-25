import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { colors } from "../../styles/colors";

const statusBarHeight = parseInt(StatusBar.currentHeight)
	? parseInt(StatusBar.currentHeight) + 22
	: 64;

/* HEADER */
const Background1 = styled.View`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: flex-start;
	padding-top: 36px;
	padding-right: 16px;
	padding-bottom: 44px;
	padding-top: ${statusBarHeight}px;
	background-color: ${colors.ROXO};
	height: 50%;
	width: 100%;
	border-end-start-radius: 56px;
	border-end-end-radius: 56px;
`;

const Background2 = styled.View`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: flex-start;
	padding-top: 36px;
	padding-right: 16px;
	padding-bottom: 44px;
	padding-top: ${statusBarHeight}px;
	background-color: ${colors.ROXO};
	height: 58%;
	width: 100%;
	border-end-start-radius: 16px;
	border-end-end-radius: 16px;
`;

export { Background1, Background2 };
