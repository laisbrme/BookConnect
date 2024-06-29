import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../../styles/theme";
import { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
	width: ${theme.metrics.px(359)}px;
	height: ${theme.metrics.px(279)}px;
	margin-top: ${theme.metrics.px(35)}px;
	border-radius: ${theme.metrics.px(4)}px;
    border: ${theme.metrics.px(0.5)}px solid ${theme.colors.CINZA};
	overflow: hidden;
`;

export const MaskGroup = styled.View`
	width: 100%;
	height: ${theme.metrics.px(162)}px;
`;

export const BookCover = styled.ImageBackground`
	width: 100%;
	height: 100%;
`;

export const TextGroup = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: ${theme.metrics.px(117)}px;
	padding: ${theme.metrics.px(20)}px;
	background-color: ${theme.colors.LIGHT};
`;

export const LinkHomeCard = styled.Text`
   font-size: 12px;
   color: black;
   font-family: ${theme.fonts.extraLightItalic};
   text-align: right;

`;




