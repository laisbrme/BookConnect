import styled from "styled-components/native";
import { theme } from "../../styles/theme";
// import { Feather } from "@expo/vector-icons";

/* HEADER */

const Content = styled.View`
	flex: 1;
	align-items: flex-start;
	flex-direction: column;
`;

const ButtonUser = styled.TouchableOpacity`
	padding-top: 25px;
	width: 44px;
	height: 44px;
	background-color: #f8f8f8;
	justify-content: center;
	align-items: center;
	border-radius: 22px;
	padding: 10px;
`;

const Username = styled.Text`
	font-size: 18px;
	color: #fff;
	font-weight: bold;
`;




/* CARD */

const LayoutText = styled.View`
	display: flex;
	width: ${theme.metrics.px(230)}px;
	height: ${theme.metrics.px(45)}px;
	margin-right: ${theme.metrics.px(120)}px;
	flex-direction: column;
	justify-content: center;
	flex-shrink: 0;
	line-height: 109%;
`;

const ListCards = styled.View`
	width: 90%;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;
	padding-top: 150px;
	
`;

export { ButtonUser, Content, Username, LayoutText, ListCards };

