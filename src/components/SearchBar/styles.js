import styled from "styled-components/native";
import { TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from "../../styles/theme";

export const Container = styled.SafeAreaView`
	width: ${theme.metrics.px(356)}px;
	height: ${theme.metrics.px(38)}px;
	flex-shrink: 0;
	background: ${theme.colors.BRANCO};
	border-radius: ${theme.metrics.px(8)}px;
`;

export const Input = styled(TextInput).attrs({
	placeholder: "pesquisar...",
})`
	flex: 1;
	margin-left: ${theme.metrics.px(15)}px;
	margin-right: ${theme.metrics.px(45)}px;
	color: ${theme.colors.CINZA};
	font-family: ${theme.fonts.lightItalic};
`;

export const BoxIconSearch = styled.View`
	display: flex;
	width: ${theme.metrics.px(38)}px;
	height: ${theme.metrics.px(38)}px;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	position: absolute;
	right: 0px;
	border-radius: ${theme.metrics.px(8)}px;
`;

export const SearchIcon = styled(Icon).attrs({
	name: "search",
})`
	color: ${theme.colors.CINZA};
	font-size: ${theme.metrics.px(18)}px;
`;
