import styled from "styled-components/native";
import { TextInput, Text } from "react-native";
import { metrics } from "../../styles/metrics";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import Icon from "react-native-vector-icons/MaterialIcons";

// const { width } = Dimensions.get('window')

export const Container = styled.SafeAreaView`
	width: ${metrics.px(356)}px;
	height: ${metrics.px(38)}px;
	flex-shrink: 0;
	background: ${colors.BRANCO};
	border-radius: ${metrics.px(8)}px;
`;

export const Input = styled(TextInput).attrs({
	placeholder: "pesquisar...",
})`
	flex: 1;
	margin-left: ${metrics.px(15)}px;
	margin-right: ${metrics.px(45)}px;
	color: ${colors.CINZA};
    font-family: ${fonts.lightItalic};

`;

export const BoxIconSearch = styled.View`
	display: flex;
	width: ${metrics.px(38)}px;
	height: ${metrics.px(38)}px;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	position: absolute;
	right: 0px;
	border-radius: ${metrics.px(8)}px;
`;

export const SearchIcon = styled(Icon).attrs({
	name: "search",
})`
	color: ${colors.CINZA};
	font-size: ${metrics.px(18)}px;
`;
